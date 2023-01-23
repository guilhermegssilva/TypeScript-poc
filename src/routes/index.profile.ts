import { Router } from "express";
import { getProfiles, createProfile, deleteProfile, updateProfile } from "../controllers/index.js";
import { profileValidator, idValidator, profileUpdateValidator } from "../middlewares/index.js";

export const profileRouter = Router();

profileRouter
.get("/profile/:id?", idValidator, getProfiles)
.post("/profile", profileValidator, createProfile)
.put("/profile/:id", profileUpdateValidator, updateProfile)
.delete("/profile/:id", idValidator, deleteProfile);
