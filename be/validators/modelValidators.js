const { body, param, validationResult } = require("express-validator");

const kedaiCreateRules = [
  body("nama_kedai")
    .isString()
    .isLength({ min: 1 })
    .withMessage("nama_kedai diperlukan"),
  body("alamat").optional().isString(),
];

const cabangCreateRules = [
  body("nama_cabang")
    .isString()
    .isLength({ min: 1 })
    .withMessage("nama_cabang diperlukan"),
  body("kedai_id").isUUID().withMessage("kedai_id tidak valid"),
];

const penggunaCreateRules = [
  body("nama_lengkap")
    .isString()
    .isLength({ min: 3 })
    .withMessage("nama_lengkap minimal 3"),
  body("email").isEmail().withMessage("email tidak valid"),
  body("password").isLength({ min: 6 }).withMessage("password minimal 6"),
  body("peran")
    .isIn(["Pemilik", "Manajer", "Kasir"])
    .withMessage("peran tidak valid"),
  body("kedai_id").isUUID().withMessage("kedai_id tidak valid"),
  body("cabang_id").isUUID().withMessage("cabang_id tidak valid"),
];

function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });
  next();
}

module.exports = {
  kedaiCreateRules,
  cabangCreateRules,
  penggunaCreateRules,
  handleValidation,
};
