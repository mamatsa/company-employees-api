import express from 'express'
import {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employee-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.post('/', authMiddleware, addEmployee)

router
  .route('/:id')
  .get(authMiddleware, getEmployee)
  .put(authMiddleware, updateEmployee)
  .delete(authMiddleware, deleteEmployee)

export default router
