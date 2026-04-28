import express from 'express';
import authUser from '../middleware/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD } from '../controllers/OrderController.js';
import authSeller from '../middleware/authSeller.js';
import { placeOrderStripe } from '../controllers/OrderController.js';

const OrderRouter = express.Router();

OrderRouter.post('/cod', authUser, placeOrderCOD )
OrderRouter.get('/user', authUser, getUserOrders)
OrderRouter.get('/seller', authSeller , getAllOrders)
OrderRouter.post('/stripe', authUser, placeOrderStripe)


export default OrderRouter;
