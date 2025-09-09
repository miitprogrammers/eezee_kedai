const { body, validationResult } = require("express-validator");

exports.createInventarisRules = [
  body("item_id").isString().isLength({ min: 1 }),
  body("nama_item").isString().isLength({ min: 1 }),
  body("unit").isString().isLength({ min: 1 }),
  body("kedai_id").isString().isLength({ min: 1 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.stockInRules = [
  body("item_id").isString().isLength({ min: 1 }),
  body("cabang_id")
    .isString()
    .isLength({ min: 1 })
    .bail()
    .custom(async (value) => {
      // verify cabang exists in DB
      const { Cabang } = require("../models");
      const cabang = await Cabang.findOne({ where: { cabang_id: value } });
      if (!cabang) throw new Error("cabang_id not found");
      return true;
    }),
  body("jumlah").isNumeric(),
  body("harga_beli").isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
