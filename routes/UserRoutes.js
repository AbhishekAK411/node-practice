import express from "express";
import { login, register, updateUser } from "../controllers/UserControllers.js";
import { addProduct, getProduct } from "../controllers/ProdControllers.js";
import { checkFields } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);
router.get('/getProduct',getProduct);
router.post('/update', checkFields, updateUser);


export default router;