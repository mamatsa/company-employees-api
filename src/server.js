import 'dotenv/config'
import express from 'express'
import { swaggerMiddleware } from './middlewares/index.js'
import companyRoutes from './routes/company.js'
import connectDB from './config/mongo.js'

connectDB()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/company', companyRoutes)

server.use('/api', swaggerMiddleware())

server.listen(process.env.PORT)
