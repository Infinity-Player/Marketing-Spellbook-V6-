const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.APP_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// Example API route
app.post("/api/analyze", (req, res) => {
  const { text } = req.body;
  res.json({ success: true, analyzed: text?.length || 0 });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
