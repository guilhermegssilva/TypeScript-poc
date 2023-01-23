import { NextFunction, Request, Response } from "express";
import { Profile } from "../types/index.js";
import { profileIdSchema, profileSchema, profileUpdateSchema } from "../models/index.js";


export async function profileUpdateValidator(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const profile = req.body;
        const validatedProfile = await profileUpdateSchema.validateAsync(profile);
        const validatedId = await profileIdSchema.validateAsync(id);
        res.locals.updatedProfile = validatedProfile;
        res.locals.id = validatedId;
        next();
    } catch (err) {
        console.error(err);
        res.status(400);
        res.send(err);
    }
}

export async function idValidator(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        let validatedId = undefined;
        if (id) {
            validatedId = await profileIdSchema.validateAsync(id);
        }
        res.locals.id = validatedId;
        next();
    } catch (err) {
        console.error(err);
        res.status(400);
        res.send(err);
    }
}

export async function profileValidator(req: Request, res: Response, next: NextFunction) {
    try {
        const profile = req.body as Profile;
        const validatedProfile = await profileSchema.validateAsync(profile);
        res.locals.profile = validatedProfile;
        next();
    } catch (err) {
        console.error(err);
        res.status(400);
        res.send(err);
    }
}
