import express from "express";
import {abhishekRoute,homeRoute} from './controllers/All-Controllers.js'

const app = express();

app.get('/', homeRoute);
app.get('/abhishek', abhishekRoute);


app.listen(3000);