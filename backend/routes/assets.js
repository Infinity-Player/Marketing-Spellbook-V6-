import { Router } from "express"
const router = Router()

// basic demo assets (in-memory)
let assets = [
  { id: "1", primaryText: ["Summer Sale — Up to 50% Off!"], keywords: ["sale", "summer", "discount"] },
  { id: "2", primaryText: ["Meet EcoSip: Your new daily cup."], keywords: ["eco", "cup", "sustainable"] },
]

router.get("/", async (_req, res) => {
  res.json(assets)
})

router.post("/", async (req, res) => {
  // you can accept a briefId or payload to "generate"
  const { seed } = req.body || {}
  const newAsset = {
    id: String(Date.now()),
    primaryText: [`Generated asset based on: ${seed || "N/A"}`],
  }
  assets.unshift(newAsset)
  res.json(newAsset)
})

export default router
