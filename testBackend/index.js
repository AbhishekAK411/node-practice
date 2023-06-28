import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/api/testBackend", router);

mongoose.connect('')
.then(()=> console.log("DB Connection Established."))
.catch((err) => console.log("DB Error ===>",err));

app.listen(3000);