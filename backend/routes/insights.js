const express = require("express");
const router = express.Router();

let insights = [
  { id: 1, metric: "CTR", value: "4.5%" },
  { id: 2, metric: "Conversions", value: "120" },
  { id: 3, metric: "Bounce Rate", value: "37%" },
];

// GET insights
router.get("/", (req, res) => {
  res.json(insights);
});

module.exports = router;
