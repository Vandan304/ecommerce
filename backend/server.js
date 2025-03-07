import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectClouldinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()
connectClouldinary()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use('/api/user',userRouter);
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("API IS WORKING")
})
app.listen(port,()=>console.log('Server started on port : '+port))