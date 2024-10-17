const crypto = require("crypto");
const nodemailer = require("nodemailer");
const path = require("path");
const ENV = require("../config/config");

const { 
  findByEmail,  // Cambiado a findByEmail
  updateResetToken, 
  findByToken,   // Cambiado a findByToken
  updatePassword 
} = require("../models/resetPasswordModel");

const { hashPassword } = require("../middlewares/bcryptPassword");

const resetPasswordController = {
  forgotPassword: async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send("Email es requerido");
    }
  
    try {
      const users = await findByEmail(email);  // Cambiado a findByEmail
      if (users.length === 0) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
  
      const user = users[0];
      const resetToken = crypto.randomBytes(20).toString("hex");
      const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  
      const resetExpire = new Date();
      resetExpire.setDate(resetExpire.getDate() + 1); 
      const formattedResetExpire = resetExpire.toISOString().split("T")[0];
  
      await updateResetToken(hashedToken, formattedResetExpire, email);
  
      const resetUrl = `https://api-digitalevent.onrender.com/api/password/reset-password/${hashedToken}`;
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: ENV.emailUser,
          pass: ENV.emailPassword,
        },
      });
  
      const mailOptions = {
        from: ENV.emailUser,
        to: user.email,
        subject: "Restablecimiento de Contraseña",
        html: `
          <p>Hola ${user.nombre} ${user.last_name}, has solicitado restablecer tu contraseña. Por favor, haz clic en el botón siguiente para establecer una nueva contraseña:</p>
          <a href="${resetUrl}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px;">Restablecer Contraseña</a>
        `,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado" });
  
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      res.status(500).json({ error: "Error al enviar el email" });
    }
  },

  resetPassword: async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
  
    if (!token || !newPassword) {
      return res.status(400).json({ error: "Token y nueva contraseña requeridos" });
    }
  
    try {
      const users = await findByToken(token);  // Cambiado a findByToken
      if (users.length === 0) {
        return res.status(400).json({ error: "Token inválido o expirado" });
      }
  
      const user = users[0];
      const hashedPassword = await hashPassword(newPassword);
  
      await updatePassword(hashedPassword, user.usuario_id);
      res.status(200).json({ message: "Contraseña restablecida con éxito" });
  
    } catch (error) {
      console.error("Error resetting password:", error);
      res.status(500).json({ error: "Error al restablecer la contraseña" });
    }
  },

  viewReset: async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "../public", "reset-password.html"));
    } catch (error) {
      res.status(500).json({ error: "Error mostrando la página de restablecimiento de contraseña" });
    }
  }
}

module.exports = resetPasswordController;

  