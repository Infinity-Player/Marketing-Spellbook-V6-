import { Router } from "express"
import multer from "multer"
import path from "path"
import fs from "fs"

const router = Router()
const uploadDir = path.join(process.cwd(), "uploads")
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

const upload = multer({ dest: uploadDir })

let items = []

router.get("/", async (_req, res) => res.json(items))

router.post("/", upload.single("file"), async (req, res) => {
  const f = req.file
  if (!f) return res.status(400).json({ error: "No file" })
  const item = { id: String(Date.now()), filename: f.originalname, size: f.size, path: f.path }
  items.unshift(item)
  res.json(item)
})

export default router
