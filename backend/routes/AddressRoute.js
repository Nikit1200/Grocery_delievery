import express from 'express';
import authUser from '../middleware/authUser.js';
import { addAddress, getAddress } from '../controllers/AddressController.js';

const  AddressRouter = express.Router();

AddressRouter.post('/add', authUser, addAddress );
AddressRouter.get('/get', authUser, getAddress );

export default AddressRouter;
