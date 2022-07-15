import { Company } from '../models/index.js'

// @desc     Fetch all companies
// @route    GET /companies
// @access   Public
export const getCompanyList = async (_, res) => {
  const companies = await Company.find()
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
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
  res.status(200).json({ company })
}

// @desc     Get a specific company
// @route    GET /companies/:id
// @access   Public
export const getCompany = async (req, res) => {
  const company = await Company.findById(req.params.id)
  res.status(200).json(company)
}

// @desc     Update company
// @route    PUT /companies/:id
// @access   Private
export const updateCompany = async (req, res) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res.status(200).json(updatedCompany)
}

// @desc     Delete company
// @route    DELETE /companies/:id
// @access   Private
export const deleteCompany = async (req, res) => {
  const company = await Company.findById(req.params.id)
  await company.remove()
  res.status(200).json({ id: req.params.id })
}
