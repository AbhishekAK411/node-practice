import express from "express";
import {abhishekRoute,example,homeRoute} from './controllers/All-Controllers.js'
import morgan from "morgan";
import router from "./routes/UserRoutes.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);


// app.get('/', homeRoute);
// app.get('/abhishek', abhishekRoute);
// app.get('/example', example);


app.listen(3000);