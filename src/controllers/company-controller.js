import { Company, Employee } from '../models/index.js'

// @desc     Fetch all companies
// @route    GET /companies
// @access   Private
export const getCompanyList = async (_, res) => {
  const companies = await Company.find()
  res.status(200).json(companies).send()
}

// @desc     Add a company
// @route    POST /companies
// @access   Private
export const createCompany = async (req, res) => {
  const company = await Company.create({
    name: req.body.name,
    websiteAddress: req.body.websiteAddress,
    logoAddress: req.body.logoAddress,
    establishmentDate: new Date(req.body.establishmentDate),
  })
  res.status(201).json({ company })
}

// @desc     Get a specific company
// @route    GET /companies/:id
// @access   Private
export const getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    const companyEmployeesList = await Employee.find({ company: company._id })
    res.status(200).json({ ...company._doc, employees: companyEmployeesList })
  } catch (e) {
    res.status(400).json({ error: 'wrong company id' })
  }
}

// @desc     Update company
// @route    PUT /companies/:id
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
    res.status(200).json(updatedCompany)
  } catch (e) {
    res.status(400).json({ error: 'wrong company id' })
  }
}

// @desc     Delete company
// @route    DELETE /companies/:id
// @access   Private
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    await company.remove()
    res.status(200).json({ id: req.params.id })
  } catch (e) {
    res.status(400).json({ error: 'wrong company id' })
  }
}
