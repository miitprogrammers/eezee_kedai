const express = require("express");
const router = express.Router();
const inventarisCtrl = require("../../controllers/inventarisController");
const stokCtrl = require("../../controllers/stokController");
const txCtrl = require("../../controllers/stockTransactionController");
const {
  createInventarisRules,
  stockInRules,
} = require("../../validators/inventoryValidators");

router.post(
  "/inventaris",
  createInventarisRules,
  inventarisCtrl.createInventaris
);
router.get("/inventaris", inventarisCtrl.listInventaris);

router.get("/stok", stokCtrl.getStok);
router.post("/stok", stokCtrl.createOrUpdateStok);

router.post("/tx/stock-in", stockInRules, txCtrl.stockIn);

module.exports = router;
