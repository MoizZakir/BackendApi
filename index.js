import express from 'express'
import dotenv from 'dotenv'
import { authRouter } from './routes/authRoute.js'
import { dbConnection } from './utils/config.js'
import {userRouter} from './routes/user.js'
import { postRouter } from './routes/postRoute.js'
import cors from 'cors'

dotenv.config()
const PORT=process.env.PORT|| 5000

const app=express()

app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
=======
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)

>>>>>>> 09cbe806f478b6340c7e56ce55878a135330d2cd

dbConnection()
app.listen(PORT,()=>{
    console.log( "server stared at port ===>"+PORT)
})
