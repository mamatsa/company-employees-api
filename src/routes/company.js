import express from 'express'
import {
  createCompany,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controllers/index.js'
import { authMiddleware, validate } from '../middlewares/index.js'
import { companySchemas } from '../schemas/index.js'

const router = express.Router()

router
  .route('/companies')
  .get(authMiddleware, getCompanyList)
  .post(authMiddleware, validate(companySchemas.createCompany), createCompany)

router
  .route('/company/:id')
  .get(authMiddleware, getCompany)
  .put(authMiddleware, validate(companySchemas.updateCompany), updateCompany)
  .delete(authMiddleware, deleteCompany)

export default router
