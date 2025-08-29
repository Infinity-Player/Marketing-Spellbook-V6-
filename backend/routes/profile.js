const express = require("express");
const router = express.Router();

let profile = {
  id: 1,
  name: "Jane Doe",
  email: "jane@example.com",
  role: "Marketer",
};

// GET profile
router.get("/", (req, res) => {
  res.json(profile);
});

// PUT update profile
router.put("/", (req, res) => {
  profile = { ...profile, ...req.body };
  res.json(profile);
});

module.exports = router;
