import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.use(morgan('dev'));
app.use(express.json());
app.use("/api/testBackend", router);

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("DB Connection Established."))
.catch((err) => console.log("DB Error ===>",err));

app.listen(process.env.PORT, ()=> console.log(`Working on port ${process.env.PORT}`));