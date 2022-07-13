import express from 'express'
import { createCompany } from '../controllers/company.js'

const router = express.Router()

router.post('/create', createCompany)

export default router
