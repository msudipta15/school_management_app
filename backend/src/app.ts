import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authrouter } from "./routes/authroutes.js";
import { createSuperAdmin } from "./utils/createsuperadmin.js";
import { superadminrouter } from "./routes/superadminroutes.js";
import { adminrouter } from "./routes/adminroutes.js";

dotenv.config();

const app = express();
const port = 3002;
const db_url = process.env.MONGODB_URL;

// Connect to database
async function main() {
  if (db_url) {
    try {
      console.log("Connecting to db......");
      mongoose.connect(db_url);
      console.log("Connected to database");

      // Create Super Admin if not already created
      await createSuperAdmin();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Invalid Database url !");
  }
}

main();

app.use(express.json());

app.use("/api/v1/auth", authrouter);
app.use("/api/v1/sa", superadminrouter);
app.use("/api/v1/admin", adminrouter);

// Start the server
try {
  app.listen(port);
  console.log(`Server running on port : ${port}`);
} catch (error) {
  console.log(error);
}
