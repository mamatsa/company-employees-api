import express from 'express'
import { login } from '../controllers/auth-controller.js'
import { validate } from '../middlewares/index.js'
import authSchema from '../schemas/auth-schema.js'

const router = express.Router()

router.post('/login', validate(authSchema, 'body'), login)

export default router
