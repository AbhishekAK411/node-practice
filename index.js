import express from "express";
// import {abhishekRoute,example,homeRoute} from './controllers/All-Controllers.js'
import morgan from "morgan";
import router from "./routes/UserRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);

mongoose.connect('mongodb+srv://abhishek:Glorious%40Mongo41@atlascluster.htagarr.mongodb.net/testDB?retryWrites=true&w=majority')
.then(()=> console.log("DB Connected"))
.catch((err)=> console.log("DB Error =>", err))




// app.get('/', homeRoute);
// app.get('/abhishek', abhishekRoute);
// app.get('/example', example);


app.listen(3000);