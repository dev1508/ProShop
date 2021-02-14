import express from 'express'
const router = express.Router()
import AsyncHandler from 'express-async-handler'
import { nextTick } from 'process'
import Product from '../models/productModel.js'


router.get('/',AsyncHandler( async (req,res) => {
    const products = await Product.find({})
    res.json(products)
})
)

router.get('/:id',AsyncHandler( async (req,res,next) => {
    const products = await Product.findById(req.params.id)
    if(products)
    res.json(products)
    else{
        const error  = new Error('product not found')
        res.status(404)
        next(error)
    }
}))

export default router