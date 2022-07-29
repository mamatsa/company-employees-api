import express from 'express'
import {
  createCompany,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controllers/index.js'
import {
  authMiddleware,
  validateBody,
  validateParams,
} from '../middlewares/index.js'
import { companySchemas } from '../schemas/index.js'

const router = express.Router()

router
  .route('/companies')
  .get(authMiddleware, getCompanyList)
  .post(
    authMiddleware,
    validateBody(companySchemas.createCompany),
    createCompany
  )

router
  .route('/company/:id')
  .get(authMiddleware, validateParams, getCompany)
  .put(
    authMiddleware,
    validateParams,
    validateBody(companySchemas.updateCompany),
    updateCompany
  )
  .delete(authMiddleware, validateParams, deleteCompany)

export default router
