const authService = require("../services/authService");
const { appendActivity } = require("../utils/log_activity");

async function register(req, res) {
  try {
    const { nama_lengkap, email, password } = req.body;
    const result = await authService.register({
      nama_lengkap,
      email,
      password,
    });
    appendActivity(`Auth: register ${email}`);
    res
      .status(201)
      .json({
        token: result.token,
        user: {
          user_id: result.pengguna.user_id,
          email: result.pengguna.email,
        },
      });
  } catch (err) {
    appendActivity(`Auth: register failed ${err.message}`);
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    appendActivity(`Auth: login ${email}`);
    res.json({
      token: result.token,
      user: { user_id: result.pengguna.user_id, email: result.pengguna.email },
    });
  } catch (err) {
    appendActivity(`Auth: login failed ${err.message}`);
    res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = { register, login };
