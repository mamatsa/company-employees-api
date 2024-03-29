import { Company, Employee } from '../models/index.js'

// @desc     Fetch all companies
// @route    GET /companies
// @access   Private
export const getCompanyList = async (_, res) => {
  try {
    const companies = await Company.find()
    const companiesWithEmployees = await Promise.all(
      companies.map(async (company) => {
        const employeesInCompany = await Employee.find({ company: company._id })
        const result = await { ...company._doc, employees: employeesInCompany }
        return result
      })
    )
    res.status(200).json(companiesWithEmployees)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

// @desc     Add a company
// @route    POST /company
// @access   Private
export const createCompany = async (req, res) => {
  try {
    if (await Company.findOne({ name: req.body.name })) {
      const error = new Error('company name should be unique')
      error.statusCode = 422
      throw error
    }
    const company = await Company.create({
      name: req.body.name,
      websiteAddress: req.body.websiteAddress,
      logoAddress: req.body.logoAddress,
      establishmentDate: new Date(req.body.establishmentDate),
    })
    res.status(201).json({ company })
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Get a specific company
// @route    GET /company/:id
// @access   Private
export const getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    if (!company) {
      const error = new Error('wrong company id')
      error.statusCode = 422
      throw error
    }
    const companyEmployeesList = await Employee.find({
      company: company._id,
    })
    res.status(200).json({ ...company._doc, employees: companyEmployeesList })
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Update company
// @route    PUT /company/:id
// @access   Private
export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    if (!updatedCompany) {
      const error = new Error('wrong company id')
      error.statusCode = 422
      throw error
    }
    res.status(200).json(updatedCompany)
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}

// @desc     Delete company
// @route    DELETE /company/:id
// @access   Private
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    if (!company) {
      const error = new Error('wrong company id')
      error.statusCode = 422
      throw error
    }
    await company.remove()
    await Employee.deleteMany({ company: req.params.id })
    res.status(200).json({ id: req.params.id })
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}
