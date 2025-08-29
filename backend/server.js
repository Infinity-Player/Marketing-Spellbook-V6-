import "dotenv/config"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import routes from "./routes/index.js"

const app = express()

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*", credentials: true }))
app.use(express.json({ limit: "2mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// Health
app.get("/health", (_req, res) => res.json({ ok: true }))

// API
app.use("/api", routes)

// 404
app.use((_req, res) => res.status(404).json({ error: "Not found" }))

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: "Server error" })
})

const PORT = Number(process.env.PORT || 4000)
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
