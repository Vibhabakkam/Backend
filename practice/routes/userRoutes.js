import express from "express";
import { checkLogin, checkRegister } from "../middlewares/auth.js";
import { Register, login } from "../controllers/userControllers.js";

const router = express.Router();


//register route
router.post("/register", checkRegister, Register);
router.post("/login", checkLogin, login);


//Methods  
// router.get()
// router.post()
// router.put()
// router.delete()
// router.patch()
// router.head()
// router.options()




export default router;