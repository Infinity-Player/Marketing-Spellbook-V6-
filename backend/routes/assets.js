const express = require("express");
const router = express.Router();

let assets = [
  { id: 1, name: "Ad Banner", type: "image", url: "/files/banner.png" },
  { id: 2, name: "Promo Video", type: "video", url: "/files/video.mp4" },
];

// GET assets
router.get("/", (req, res) => {
  res.json(assets);
});

// POST add asset
router.post("/", (req, res) => {
  const newAsset = { id: Date.now(), ...req.body };
  assets.push(newAsset);
  res.json(newAsset);
});

module.exports = router;
