import { Router } from "express";
import { getPlaylist } from "../controllers/spotifyController.js";
const router = Router();

router.route("/getPlaylist").post(getPlaylist);

export default router;
