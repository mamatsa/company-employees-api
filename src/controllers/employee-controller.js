import { Employee } from '../models/index.js'

// @desc     Add employee
// @route    POST /employee
// @access   Private
export const addEmployee = async (req, res) => {
  try {
    if (await Employee.findOne({ personalID: req.body.personalID })) {
      return res
        .status(422)
        .json({ error: 'employee with such personal id already exists' })
    }
    const employee = await Employee.create({
      company: req.body.company,
      name: req.body.name,
      lastName: req.body.lastName,
      startDate: req.body.startDate,
      birthDate: req.body.birthDate,
      personalID: req.body.personalID,
      jobPosition: req.body.jobPosition,
    }).select('-__v')
    return res.status(201).json(employee)
  } catch (e) {
    return res.status(400).json({ error: 'wrong company id' })
  }
}

// @desc     Get employee info
// @route    GET /employee/:id
// @access   Private
export const getEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await Employee.findById(id).select('-__v')
    if (!employee) {
      throw new Error()
    }
    res.status(200).json(employee)
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
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
    ).select('-__v')
    if (!updatedEmployee) {
      throw new Error()
    }
    res.status(200).json(updatedEmployee)
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
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
      throw new Error()
    }
    res.status(200).json({ id })
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
  }
}
