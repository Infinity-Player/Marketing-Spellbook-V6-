import { Router } from "express"
const router = Router()

const insights = [
  { day: "Mon", clicks: 120 },
  { day: "Tue", clicks: 200 },
  { day: "Wed", clicks: 170 },
  { day: "Thu", clicks: 250 },
  { day: "Fri", clicks: 300 },
]

router.get("/", async (_req, res) => res.json(insights))

export default router
