const express = require("express");
const router = express.Router();

let brief = {
  id: 1,
  title: "Q4 Marketing Strategy",
  description: "Expand ad reach to APAC region and improve CTR by 10%",
};

// GET brief
router.get("/", (req, res) => {
  res.json(brief);
});

// PUT update brief
router.put("/", (req, res) => {
  brief = { ...brief, ...req.body };
  res.json(brief);
});

module.exports = router;
