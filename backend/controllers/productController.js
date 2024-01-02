import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

//@desc   Fetch all products
//@route  Get/api/products
//@access Public
const getProducts =asyncHandler(async(req,res)=>{
    const product = await Product.find();
    res.json(product);
})

//@desc   Fetch a products
//@route  GET/api/products/:id
//@access Public
const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product);
    } else {
        res.staus(404);
        throw new Error('Resource not found');
    }
})

 export {getProducts , getProductById }