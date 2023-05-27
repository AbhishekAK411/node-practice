import express from "express";
import { login, register } from "../controllers/UserControllers.js";
import { addProduct } from "../controllers/ProdControllers.js";

const router = express.Router();

router.get('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);


export default router;