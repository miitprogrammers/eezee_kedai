const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../middleware/verifyToken");
const kedaiCtrl = require("../../controllers/kedaiController");
const cabangCtrl = require("../../controllers/cabangController");
const penggunaCtrl = require("../../controllers/penggunaController");
const { requireRole } = require("../../middleware/requireRole");
const {
  kedaiCreateRules,
  cabangCreateRules,
  penggunaCreateRules,
  handleValidation,
} = require("../../validators/modelValidators");

// Kedai
router.post(
  "/kedai",
  verifyToken,
  requireRole("Pemilik"),
  kedaiCreateRules,
  handleValidation,
  kedaiCtrl.createKedai
);
router.get("/kedai", verifyToken, kedaiCtrl.listKedai);
router.get("/kedai/:id", verifyToken, kedaiCtrl.getKedai);
router.put("/kedai/:id", verifyToken, kedaiCtrl.updateKedai);
router.delete(
  "/kedai/:id",
  verifyToken,
  requireRole("Pemilik"),
  kedaiCtrl.deleteKedai
);

// Cabang
router.post(
  "/cabang",
  verifyToken,
  cabangCreateRules,
  handleValidation,
  cabangCtrl.createCabang
);
router.get("/cabang", verifyToken, cabangCtrl.listCabang);
router.get("/cabang/:id", verifyToken, cabangCtrl.getCabang);
router.put("/cabang/:id", verifyToken, cabangCtrl.updateCabang);
router.delete("/cabang/:id", verifyToken, cabangCtrl.deleteCabang);

// Pengguna
router.post(
  "/pengguna",
  verifyToken,
  requireRole("Pemilik", "Manajer"),
  penggunaCreateRules,
  handleValidation,
  penggunaCtrl.createPengguna
);
router.get("/pengguna", verifyToken, penggunaCtrl.listPengguna);
router.get("/pengguna/:id", verifyToken, penggunaCtrl.getPengguna);
router.put("/pengguna/:id", verifyToken, penggunaCtrl.updatePengguna);
router.delete("/pengguna/:id", verifyToken, penggunaCtrl.deletePengguna);

module.exports = router;
