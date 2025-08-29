const express = require("express");
const router = express.Router();

let reports = [
  { id: 1, title: "Weekly Marketing Report", fileUrl: "/files/report1.pdf" },
  { id: 2, title: "Ad Campaign Performance", fileUrl: "/files/report2.pdf" },
];

// GET reports
router.get("/", (req, res) => {
  res.json(reports);
});

// POST add new report
router.post("/", (req, res) => {
  const newReport = { id: Date.now(), ...req.body };
  reports.push(newReport);
  res.json(newReport);
});

module.exports = router;
