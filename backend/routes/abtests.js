import { Router } from "express"
const router = Router()

let tests = []

router.get("/", async (_req, res) => res.json(tests))

router.post("/", async (req, res) => {
  const t = { id: String(Date.now()), winner: null, ...req.body }
  tests.push(t)
  res.json(t)
})

router.post("/:id/winner", async (req, res) => {
  const { id } = req.params
  const { winner } = req.body
  const t = tests.find((x) => x.id === id)
  if (!t) return res.status(404).json({ error: "Not found" })
  t.winner = winner
  res.json(t)
})

export default router
