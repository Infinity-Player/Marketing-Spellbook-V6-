import { Router } from "express"
const router = Router()

router.post("/", async (req, res) => {
  const { prompt } = req.body || {}
  const base = String(prompt || "your brand")
  const assets = [
    `Headline: ${base} — made for doers.`,
    `Primary: Discover ${base} and get more done with less.`,
    `Tagline: ${base}. Simple. Powerful. Yours.`,
  ]
  res.json({ assets })
})

export default router
