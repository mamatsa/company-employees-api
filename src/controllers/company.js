import { Company } from '../models/index.js'

// @desc     Add a company
// @route    POST /company/create
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
