import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import leadRoutes from "./routes/leadRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vidushi_db_user:Ballu@9856#@vidushi1.p1dyrf9.mongodb.net/?appName=Vidushi1");

app.use("/api/leads", leadRoutes);
app.use("/api/agents", agentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});