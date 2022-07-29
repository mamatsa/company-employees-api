import express from 'express'
import { login } from '../controllers/index.js'
import { validateBody } from '../middlewares/index.js'
import { authSchema } from '../schemas/index.js'

const router = express.Router()

router.post('/login', validateBody(authSchema), login)

export default router
