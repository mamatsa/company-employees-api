import express from 'express'
import {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employee-controller.js'
import { authMiddleware, validate } from '../middlewares/index.js'
import employeeSchemas from '../schemas/employee-schema.js'

const router = express.Router()

router.post(
  '/',
  authMiddleware,
  validate(employeeSchemas.addEmployee),
  addEmployee
)

router
  .route('/:id')
  .get(authMiddleware, getEmployee)
  .put(authMiddleware, validate(employeeSchemas.updateEmployee), updateEmployee)
  .delete(authMiddleware, deleteEmployee)

export default router
