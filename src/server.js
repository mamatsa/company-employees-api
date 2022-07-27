import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { swaggerMiddleware } from './middlewares/index.js'
import { authRoutes, companyRoutes, employeeRoutes } from './routes/index.js'
import { connectDB } from './config/index.js'

connectDB()

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/', authRoutes)
server.use('/', companyRoutes)
server.use('/employee', employeeRoutes)

server.use('/api-docs', swaggerMiddleware())

server.listen(process.env.PORT)
