const { body, validationResult } = require("express-validator");

const registerRules = [
  body("nama_lengkap")
    .isString()
    .isLength({ min: 3 })
    .withMessage("nama_lengkap minimal 3 karakter"),
  body("email").isEmail().withMessage("email tidak valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password minimal 6 karakter"),
];

const loginRules = [
  body("email").isEmail().withMessage("email tidak valid"),
  body("password").exists().withMessage("password diperlukan"),
];

function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports = { registerRules, loginRules, handleValidation };
