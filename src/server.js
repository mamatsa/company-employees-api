import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { swaggerMiddleware } from './middlewares/index.js'
import authRoutes from './routes/auth.js'
import companyRoutes from './routes/company.js'
import employeeRoutes from './routes/employee.js'
import connectDB from './config/mongo.js'

connectDB()

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/', authRoutes)
server.use('/companies', companyRoutes)
server.use('/employee', employeeRoutes)

server.use('/api-docs', swaggerMiddleware())

server.listen(process.env.PORT)
