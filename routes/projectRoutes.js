import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// CRUD routes
router.post("/create-project", createProject);
router.get("/", getAllProjects);
router.get("/:slug", getProjectBySlug);
router.put("/:slug", updateProject);
router.delete("/:slug", deleteProject);

export default router;
