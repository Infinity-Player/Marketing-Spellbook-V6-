import { Router } from "express"
import briefs from "./briefs.js"
import assets from "./assets.js"
import insights from "./insights.js"
import brandbrain from "./brandbrain.js"
import personas from "./personas.js"
import abtests from "./abtests.js"
import scheduler from "./scheduler.js"
import report from "./report.js"
import library from "./library.js"
import creative from "./creative.js"
import profile from "./profile.js"

const router = Router()

router.use("/briefs", briefs)
router.use("/assets", assets)
router.use("/insights", insights)
router.use("/brandbrain", brandbrain)
router.use("/personas", personas)
router.use("/abtests", abtests)
router.use("/scheduler", scheduler)
router.use("/report", report)
router.use("/library", library)
router.use("/creative", creative)
router.use("/profile", profile)

export default router
