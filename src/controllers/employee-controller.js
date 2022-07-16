import { Employee } from '../models/index.js'

// @desc     Add employee
// @route    POST /employee
// @access   Private
export const addEmployee = async (req, res) => {
  const {
    company,
    name,
    lastName,
    startDate,
    birthDate,
    personalID,
    jobPosition,
  } = req.body
  const employee = await Employee.create({
    company,
    name,
    lastName,
    startDate,
    birthDate,
    personalID,
    jobPosition,
  })
  return res.status(200).json(employee)
}

// @desc     Get employee info
// @route    GET /employee/:id
// @access   Private
export const getEmployee = async (req, res) => {
  const { id } = req.params
  const employee = await Employee.findById(id)
  return res.status(200).json(employee)
}

// @desc     Update employee
// @route    PUT /employee/:id
// @access   Private
export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const {
    company,
    name,
    lastName,
    startDate,
    birthDate,
    personalID,
    jobPosition,
  } = req.body
  const employee = await Employee.findByIdAndUpdate(
    id,
    {
      company,
      name,
      lastName,
      startDate,
      birthDate,
      personalID,
      jobPosition,
    },
    {
      new: true,
    }
  )
  return res.status(200).json(employee)
}

// @desc     Delete employee
// @route    DELETE /employee/:id
// @access   Private
export const deleteEmployee = async (req, res) => {
  const { id } = req.params
  const employee = await Employee.findByIdAndDelete(id)
  return res.status(200).json(employee)
}
