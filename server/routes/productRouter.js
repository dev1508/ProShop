import express from 'express'
const router = express.Router()
import { nextTick } from 'process'
import {getProducts,getTopProducts,createProductReview,getProductById,deleteProduct,createProduct,updateProduct} from '../controllers/productController.js'
import {protect,admin} from '../middlewares/authMiddleware.js'
 
router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)

//router.route('/top').get(getTopProducts)
export default router

