import express from 'express'
//import products from './data/products.js'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {notFound,errorHandler} from './middlewares/errorHandler.js'
import productRoutes from './routes/productRouter.js'

const app = express();
dotenv.config();
connectDB()

app.use((req,res,next) => {
    console.log(req.originalUrl)
    next();
})


app.get('/',(req,res) => {
    res.send('aPI RUNNING')
})


app.use('/api/products',productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))