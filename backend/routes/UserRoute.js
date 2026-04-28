import express from "express";
import { register } from "../controllers/UserController.js";
import { login } from "../controllers/UserController.js";
import { isAuth } from "../controllers/UserController.js";
import { logout } from "../controllers/UserController.js";
import authUser from "../middleware/authUser.js";

const UserRouter=express.Router();
UserRouter.post('/register',register)
UserRouter.post('/login',login)
UserRouter.get('/is-auth', authUser, isAuth)
UserRouter.get('/logout',authUser, logout)



export default UserRouter;
