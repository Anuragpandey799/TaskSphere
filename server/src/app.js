import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// Middleware
app.use(cors(
    {
    origin: [
      "https://task-sphere-vert.vercel.app/",
      "https://tasksphere-1mf6.onrender.com/"
    ],
    credentials: true,
  }
));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("TaskSphere API is running");
});

export default app;
