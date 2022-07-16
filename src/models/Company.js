import mongoose from 'mongoose'

const companySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  websiteAddress: {
    type: String,
    required: true,
  },
  logoAddress: {
    type: String,
    required: true,
  },
  establishmentDate: {
    type: Date,
    required: true,
  },
})

const Company = mongoose.model('Company', companySchema)

export default Company
