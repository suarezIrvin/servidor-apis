const AuthModel = require("../models/authModel");

const authController = {
  login: async (req, res) => {
    const { email, contrasena } = req.body;

    if (!email || !contrasena) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      const user = await AuthModel.getUserByEmail(email);

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      const isMatch = await AuthModel.comparePasswords(contrasena, user.contrasena);

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      } 

      const token = await AuthModel.generateToken(user);

      return res.json({ token, user });
    } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = authController;
