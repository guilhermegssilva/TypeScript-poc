import express, { Request, Response } from "express";
import cors from "cors";
import { routerIndex } from "./routes/index.route.js";

const server = express();

server.use(express.json()).use(cors()).use(routerIndex);

server.get("/health", (req: Request, res: Response) => {
    res.status(200).send("All good!"); 
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
