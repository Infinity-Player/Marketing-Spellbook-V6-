import { Router } from "express"
const router = Router()

let personas = []

router.get("/", async (_req, res) => res.json(personas))

router.post("/", async (req, res) => {
  const p = { id: String(Date.now()), ...req.body }
  personas.push(p)
  res.json(p)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  personas = personas.filter((p) => p.id !== id)
  res.json({ ok: true })
})

export default router
