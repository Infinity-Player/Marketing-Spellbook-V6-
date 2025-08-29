import { Router } from "express"
const router = Router()

let profile = { name: "Spellbook User", email: "user@example.com", company: "Acme Co." }

router.get("/", async (_req, res) => res.json(profile))

router.put("/", async (req, res) => {
  profile = { ...profile, ...req.body }
  res.json(profile)
})

export default router
