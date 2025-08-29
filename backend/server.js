const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const profileRoutes = require("./routes/profile");
const reportsRoutes = require("./routes/reports");
const schedulerRoutes = require("./routes/scheduler");
const insightsRoutes = require("./routes/insights");
const assetsRoutes = require("./routes/assets");
const briefRoutes = require("./routes/brief");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/profile", profileRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/scheduler", schedulerRoutes);
app.use("/api/insights", insightsRoutes);
app.use("/api/assets", assetsRoutes);
app.use("/api/brief", briefRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Marketing Spellbook backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
