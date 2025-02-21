require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

// routes
const pathsRouter = require("./routes/pathsRoutes");
const goalsRouter = require("./routes/goalsRoutes");
const modulesRouter = require("./routes/modulesRoutes");
const projectsRouter = require("./routes/projectsRoutes");
const toolsRouter = require("./routes/toolsRoutes");
const habitsRouter = require("./routes/habitsRoutes");

app.get("/", (req, res) => {
  res.redirect(301, "/paths");
});

app.use("/paths", pathsRouter);
app.use("/goals", goalsRouter);
app.use("/modules", modulesRouter);
app.use("/projects", projectsRouter);
app.use("/tools", toolsRouter);
app.use("/habits", habitsRouter);
