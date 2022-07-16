import express from 'express'
import {
  createCompany,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controllers/company-controller.js'

const router = express.Router()

router.route('/').get(getCompanyList).post(createCompany)

router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany)

export default router
