import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const authrouter = Router();

authrouter.post("/signup", (req, res) => {});

export { authrouter };
