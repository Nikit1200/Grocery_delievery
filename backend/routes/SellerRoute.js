import express from "express";
import  {isSellerAuth, sellerLogin, sellerlogout} from "../controllers/SellerController.js"
import authSeller from "../middleware/authSeller.js";

const  SellerRouter = express.Router();

SellerRouter.post('/login', sellerLogin);
SellerRouter.get('/is-auth',authSeller, isSellerAuth);
SellerRouter.get('/logout', authSeller, sellerlogout);


export default SellerRouter;

