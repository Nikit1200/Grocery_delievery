import express from "express";
import { updateCart } from "../controllers/CartController.js";
import authUser from "../middleware/authUser.js";


const CartRouter = express.Router();

CartRouter.post('/update', authUser, updateCart)

export default CartRouter;
