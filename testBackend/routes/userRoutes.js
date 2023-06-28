import express from "express";
import { fetchHTMLWeather, getWeather } from "../controllers/weatherWorld.js";
import { ping } from "../controllers/healthCheck.js";


const router = express.Router();

//health check API
router.get("/ping", ping);

//weather API's
router.get("/fetchHTMLWeather", fetchHTMLWeather);
router.get("/getWeather", getWeather);
export default router;