import express from "express";
const router = express.Router();
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from '../models/productModel.js';
// import { errorHandler } from "../middleware/errorMiddleware.js";
import{getProducts,getProductById} from "../controllers/productController.js"
// get all products 
router.route('/').get(getProducts);
// router.get('/', asyncHandler(async (req, res) => {
//     const product = await Product.find();
//     res.json(product);
// }));

//get single products
router.route('/:id').get(getProductById);
// router.get('/:id', asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) { 
//         return res.json(product);
//     } else {
//         res.staus(404);
//         throw new Error('Resource not found');
//     }
// }));

export default router 