import { Request, Response } from "express"
import { getProfileDb, createProfileDb, deleteProfileDb, updateProfileDb } from "../repositories/index.js"
import { Profile, ProfileBody } from "../types/index.js";

export async function deleteProfile(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        await deleteProfileDb(id);
        res.sendStatus(200);
        
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}

export async function createProfile(req: Request, res: Response){
    try {
        const {profile} = res.locals as {profile: Profile};
        await createProfileDb(profile);
        res.sendStatus(201);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}

export async function getProfiles(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        const {rows: profiles} = await getProfileDb(id);
        res.status(200)
        res.send(profiles)
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}

export async function updateProfile(req: Request, res: Response){
    try {
        const {id, updatedProfile} = res.locals as {id: string, updatedProfile: ProfileBody};
        await updateProfileDb(id, updatedProfile);
        res.sendStatus(200);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}
