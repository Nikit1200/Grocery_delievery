import express from 'express';
import {upload} from '../configs/Multer.js';
import authSeller from '../middleware/authSeller.js';
import {addProduct, changeStock, productById , productList } from '../controllers/ProductController.js';


const ProductRoute = express.Router();

ProductRoute.post('/add', upload.array("images"), authSeller, addProduct);
ProductRoute.get('/list', productList)
ProductRoute.get('/id', productById)
ProductRoute.post('/stock', authSeller, changeStock)

export default ProductRoute;
