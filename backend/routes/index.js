const express = require("express");
const briefsRoute = require("./brief");
const assetsRoute = require("./assets");
const insightsRoute = require("./insights");

const router = express.Router();

router.use(briefsRoute);
router.use(assetsRoute);
router.use(insightsRoute);

module.exports = router;
