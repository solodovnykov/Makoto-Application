import express from "express";
import { getManuals, createManuals, getManual, updateManual, deleteManual } from "../controllers/manuals.js";

const router = express.Router();

router.get("/", getManuals);
router.get("/:id", getManual);
router.post("/", createManuals);
router.patch("/:id", updateManual);
router.delete("/:id", deleteManual);

export default router;
