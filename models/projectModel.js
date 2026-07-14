import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    // Basic Information
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 180,
    },

    longDescription: {
      type: String,
      required: true,
    },

    // Images
    thumbnailImage: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      required: true,
    },

    coverCaption: {
      type: String,
      default: "",
    },

    // Gallery Images
    images: [
      {
        title: {
          type: String,
          trim: true,
        },

        caption: {
          type: String,
          default: "",
        },

        url: {
          type: String,
          required: true,
        },

        order: {
          type: Number,
          default: 0,
        },
      },
    ],

    // Technologies
    techStack: {
      type: [String],
      default: [],
    },

    // Features
    features: {
      type: [String],
      default: [],
    },

    // Links
    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    // Project Information
    category: {
      type: String,
      enum: ["Full Stack", "Frontend", "Backend", "MERN", "React"],
      default: "MERN",
    },

    role: {
      type: String,
      default: "Full Stack Developer",
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },

    client: {
      type: String,
      default: "Personal Project",
    },

    duration: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },
    reflection: {
      heading: {
        type: String,
        default: "Reflection",
      },
      paragraphs: {
        type: [String],
        default: [],
      },
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model("Project", projectSchema);
