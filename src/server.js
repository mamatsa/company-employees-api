import 'dotenv/config'
import express from 'express'
import companyRoutes from './routes/company.js'
import connectDB from './config/mongo.js'

connectDB()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/company', companyRoutes)

server.listen(process.env.PORT)
