import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  personalID: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
})

const Employee = mongoose.model('Employee', employeeSchema)

export default Employee
