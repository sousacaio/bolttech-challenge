const mongoose = require("mongoose");

const { Schema } = mongoose;

const TasksSchema = new Schema(
    {
        title: String,
        status: Boolean,
        terminationDate: Date,
    },
    {
        timestamps: true,
    }
);

const ProjectsSchema = new Schema(
    {
        name: String,
        tasks: [TasksSchema],
    },
    {
        timestamps: true,
    }
);

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;
