import express from "express";
import { login, register, updateUser } from "../controllers/UserControllers.js";
import { addProduct, getProduct } from "../controllers/ProdControllers.js";
import { checkFields } from "../middlewares/authMiddleware.js";
import { otpCheckEmail, otpCheckLogin, otpCheckLoginEmail, otpCheckRegister, otpEmailRegister, otpForRegister, otpLogin, otpLoginEmail } from "../controllers/otpController.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);
router.get('/getProduct',getProduct);
router.post('/update', checkFields, updateUser);

router.post("/otpregister", otpForRegister);
router.post("/otpcheckLogin", otpCheckRegister);

router.post("/otp-email-register", otpEmailRegister);
router.post("/otpCheckEmail", otpCheckEmail);

//Login routes using OTP
router.post("/otpLogin", otpLogin);
router.post("/otpCheckLoginNumber", otpCheckLogin);
router.post("/otpLoginEmail" , otpLoginEmail);
router.post("/otpCheckLoginEmail", otpCheckLoginEmail);




export default router;