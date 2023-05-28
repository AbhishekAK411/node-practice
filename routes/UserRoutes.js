import express from "express";
import { login, register, updateUser } from "../controllers/UserControllers.js";
import { addProduct, getProduct } from "../controllers/ProdControllers.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);
router.get('/getProduct',getProduct);
router.post('/update', updateUser);


export default router;