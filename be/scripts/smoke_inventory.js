// Direct controller smoke test (no external HTTP client required)
(async function () {
  try {
    const inventarisCtrl = require("../controllers/inventarisController");
    const txCtrl = require("../controllers/stockTransactionController");
    const inventaris = {
      item_id: "itm-" + Date.now(),
      nama_item: "Tepung Test",
      unit: "kg",
      kedai_id: "5a9b7b2b-6270-445f-a9a4-4cf674e03ccd",
    };

    // create inventaris
    await inventarisCtrl.createInventaris(
      { body: inventaris },
      {
        status: (s) => ({
          json: (d) => console.log("Create inventaris:", d || s),
        }),
      }
    );

    // stock-in
    const tx = {
      item_id: inventaris.item_id,
      cabang_id: "f1b084b3-86aa-41d1-af03-1b55b8efc5db",
      jumlah: 10,
      harga_beli: 5000,
      kedai_id: inventaris.kedai_id,
    };
    await txCtrl.stockIn(
      { body: tx },
      {
        json: (d) => console.log("Stock-in result:", d),
        status: (s) => ({ json: (d) => console.log("Stock-in err:", d) }),
      }
    );
  } catch (err) {
    console.error("Smoke error", err);
  }
})();
