import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
  }
)

const Company = mongoose.model('Company', companySchema)

export default Company
