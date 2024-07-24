const pool = require('../config/connection');
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const ENV = require("../config/config");
const path = require("path");

const {
    comparePasswords,
    hashPassword,
  } = require("../middlewares/bcryptPassword");


const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send("Email es requerido");
    }
    try {

        const [users] = await pool.query("SELECT * FROM Usuarios WHERE email = ?", [
            email,
          ]);
          if (users.length === 0) {
            return res.status(404).json({ error: "User not found" });
          }
          const user = users[0];
      
          const resetToken = crypto.randomBytes(20).toString("hex");
      
          const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");
          const resetExpire = new Date();
      
          resetExpire.setDate(resetExpire.getDate() + 1); // Ajustar para que el token dure un día
          const formattedResetExpire = resetExpire.toISOString().split("T")[0]; // Mantener solo la fecha
      
          console.log(formattedResetExpire);
          console.log(hashedToken);
          // Actualizar el usuario con el token y la expiración
          const [result] = await pool.query(
            "UPDATE Usuarios SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE email = ?",
            [hashedToken, formattedResetExpire, email]
          );
      
          if (result.affectedRows > 0) {
            const resetUrl = `https://api-digitalevent.onrender.com/api/password/reset-password/${hashedToken}`;
            const transporter = nodemailer.createTransport({
              service: "Gmail",
              auth: {
                user: ENV.emailUser,
                pass: ENV.emailPassword,
              },
            });
      
            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: user.email,
              subject: "Restablecimiento de Contraseña",
              html: `
                <p>Has solicitado restablecer tu contraseña. Por favor, haz clic en el botón siguiente para establecer una nueva contraseña:</p>
                <a href="${resetUrl}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px;">Restablecer Contraseña</a>
              `,
            };
      
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent" });
          } else {
            console.error("Error in forgotPassword:", error);
            res.status(500).json({ error: "Error sending reset password email" });
          }   

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
};


const resetPassowrd = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ error: "Token y nueva contraseña requeridos" });
    }
    try{

         // Consultar usuario con el token de reseteo válido y no expirado
    const [users] = await pool.query(
        "SELECT * FROM Usuarios WHERE resetPasswordToken = ? AND resetPasswordExpire > NOW()",
        [token]
      );
  
      if (users.length === 0) {
        return res.status(400).json({ error: "Invalid or expired token" });
      }
  
      const user = users[0];
  
      console.log(user);
      const hashedPassword = hashPassword(newPassword);
      console.log(hashedPassword);
  
      const [result] = await pool.query(
        "UPDATE Usuarios SET contrasena = ?, resetPasswordToken = NULL, resetPasswordExpire = NULL WHERE usuario_id = ?",
        [hashedPassword, user.usuario_id]
      );
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "Password has been reset successfully" });
      } else {
        res.status(500).json({ error: "Error resetting password" });
      }   

    } catch (error) {
        res.status(500).json({ error: "Error resetting password" });
    }
}


const viewReset = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "reset-password.html"));
  } catch (error) {
    res.status(500).json({ error: "Error resetting password" });
  }
}
module.exports = {
    forgotPassword,
    resetPassowrd,
    viewReset
  };
  