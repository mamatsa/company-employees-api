import mongoose from 'mongoose'
import { Employee, Company } from '../models/index.js'

// @desc     Add employee
// @route    POST /employee
// @access   Private
export const addEmployee = async (req, res) => {
  try {
    // check if valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(req.body.company)) {
      const error = new Error('wrong company id format')
      error.statusCode = 422
      throw error
    }
    // check if company exists
    const company = await Company.findById(req.body.company)
    if (!company) {
      const error = new Error('wrong company id')
      error.statusCode = 422
      throw error
    }

    // check if personalID already exists
    if (await Employee.findOne({ personalID: req.body.personalID })) {
      const error = new Error('employee with such personal id already exists')
      error.statusCode = 422
      throw error
    }

    const employee = await Employee.create({
      company: req.body.company,
      name: req.body.name,
      lastName: req.body.lastName,
      startDate: req.body.startDate,
      birthDate: req.body.birthDate,
      personalID: req.body.personalID,
      jobPosition: req.body.jobPosition,
    })
    res.status(201).json(employee)
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Get employee info
// @route    GET /employee/:id
// @access   Private
export const getEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await Employee.findById(id)
    if (!employee) {
      const error = new Error('wrong employee id')
      error.statusCode = 422
      throw error
    }
    res.status(200).json(employee)
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Update employee
// @route    PUT /employee/:id
// @access   Private
export const updateEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        company: req.body.company,
        name: req.body.name,
        lastName: req.body.lastName,
        startDate: req.body.startDate,
        birthDate: req.body.birthDate,
        personalID: req.body.personalID,
        jobPosition: req.body.jobPosition,
      },
      {
        new: true,
      }
    )
    if (!updatedEmployee) {
      const error = new Error('wrong employee id')
      error.statusCode = 422
      throw error
    }
    res.status(200).json(updatedEmployee)
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Delete employee
// @route    DELETE /employee/:id
// @access   Private
export const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id)
    if (!deletedEmployee) {
      const error = new Error('wrong employee id')
      error.statusCode = 422
      throw error
    }
    res.status(200).json({ id })
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}
