import { Router } from "express"
const router = Router()

// in-memory store
const briefs = []

router.get("/", async (_req, res) => {
  res.json(briefs)
})

router.post("/", async (req, res) => {
  const brief = { id: String(Date.now()), ...req.body }
  briefs.push(brief)
  res.json(brief)
})

export default router
