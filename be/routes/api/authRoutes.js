const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const {
  registerRules,
  loginRules,
  handleValidation,
} = require("../../validators/authValidators");

router.post(
  "/register",
  registerRules,
  handleValidation,
  authController.register
);
router.post("/login", loginRules, handleValidation, authController.login);

module.exports = router;
