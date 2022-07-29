import express from 'express'
import {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/index.js'
import {
  authMiddleware,
  validateBody,
  validateParams,
} from '../middlewares/index.js'
import { employeeSchemas } from '../schemas/index.js'

const router = express.Router()

router.post(
  '/',
  authMiddleware,
  validateBody(employeeSchemas.addEmployee),
  addEmployee
)

router
  .route('/:id')
  .get(authMiddleware, validateParams, getEmployee)
  .put(
    authMiddleware,
    validateParams,
    validateBody(employeeSchemas.updateEmployee),
    updateEmployee
  )
  .delete(authMiddleware, validateParams, deleteEmployee)

export default router
