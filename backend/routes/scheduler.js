import { Router } from "express"
const router = Router()

let events = []

router.get("/", async (_req, res) => res.json(events))

router.post("/", async (req, res) => {
  const e = { id: String(Date.now()), ...req.body }
  events.push(e)
  res.json(e)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  events = events.filter((e) => e.id !== id)
  res.json({ ok: true })
})

export default router
