import Router from "express";

import { Auth } from "../controller/Auth.js";
import { DBcreate } from "../controller/DBcreate.js";
const router = new Router();

router.post("/userAuth", Auth)
router.post("/createDB", DBcreate)


export default router;