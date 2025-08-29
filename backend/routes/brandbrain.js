import { Router } from "express"
const router = Router()

router.post("/", async (req, res) => {
  const { brandName, voice, pillars, audience } = req.body || {}
  const response = {
    brandName,
    voice,
    pillars: String(pillars || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    audience,
    do: ["Be concise", "Use benefit-first headlines"],
    dont: ["Overpromise", "Use jargon"],
    sampleTaglines: [
      `${brandName || "Your Brand"} — built for ${audience || "your audience"}.`,
      `${brandName || "Your Brand"}: ${voice || "authentic"} by design.`,
    ],
  }
  res.json(response)
})

export default router
