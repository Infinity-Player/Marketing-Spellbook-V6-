import { Router } from "express"
const router = Router()

router.get("/", async (_req, res) => {
  // simple demo; replace with real aggregation
  res.json([
    { label: "Impressions", value: 143200 },
    { label: "Clicks", value: 5470 },
    { label: "CTR %", value: 3.8 },
    { label: "Conversions", value: 620 },
  ])
})

export default router
