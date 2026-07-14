import Project from "../models/projectModel.js";
import slugify from "slugify";

// CREATE Project
export const createProject = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      longDescription,
      images,
      githubLink,
      liveLink,
      techStack,
    } = req.body;

    const project = new Project({
      title,
      slug: slugify(title),
      shortDescription,
      longDescription,
      images,
      githubLink,
      liveLink,
      techStack,
    });

    await project.save();

    res.status(201).send({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Error creating project", error });
  }
};

// GET ALL Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .select(
        "title slug shortDescription thumbnailImage techStack featured category status order",
      )
      .sort({ order: 1 });

    return res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching projects",
      error: error.message,
    });
  }
};

// GET Single Project (via slug)
export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });

    if (!project) {
      return res
        .status(404)
        .send({ success: false, message: "Project not found" });
    }

    return res.status(200).send({
      success: true,
      project,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error fetching project", error });
  }
};

// UPDATE Project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { slug: req.params.slug },
      { ...req.body },
      { new: true },
    );

    res.status(200).send({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Error updating project", error });
  }
};

// DELETE Project
export const deleteProject = async (req, res) => {
  try {
    await Project.findOneAndDelete({ slug: req.params.slug });

    res.status(200).send({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Error deleting project", error });
  }
};
