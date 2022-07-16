import express from 'express'
import {
  createCompany,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controllers/company-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.route('/').get(getCompanyList).post(authMiddleware, createCompany)

router
  .route('/:id')
  .get(getCompany)
  .put(authMiddleware, updateCompany)
  .delete(authMiddleware, deleteCompany)

export default router
