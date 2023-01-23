import { Router } from "express";
import { profileRouter } from "./index.profile.js";


export const routerIndex = Router();

routerIndex.use(profileRouter);
