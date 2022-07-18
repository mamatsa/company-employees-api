import Joi from 'joi'

const companySchemas = {
  createCompany: Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'name field is required',
      'string.base': 'name field should be string',
    }),
    websiteAddress: Joi.string().required().uri().messages({
      'any.required': 'website address field is required',
      'string.base': 'website address field should be string',
      'string.uri': 'website address must be a valid uri',
    }),
    logoAddress: Joi.string().required().uri().messages({
      'any.required': 'logo address field is required',
      'string.base': 'logo address field should be string',
      'string.uri': 'logo address must be a valid uri',
    }),
    establishmentDate: Joi.string().required().isoDate().messages({
      'any.required': 'establishment date field is required',
      'string.base': 'establishment date field should be string',
      'string.isoDate': 'establishment date field must be in iso date format',
    }),
  }),
  updateCompany: Joi.object({
    name: Joi.string().messages({
      'string.base': 'name field should be string',
    }),
    websiteAddress: Joi.string().required().uri().messages({
      'string.base': 'website address field should be string',
      'string.uri': 'website address must be a valid uri',
    }),
    logoAddress: Joi.string().uri().messages({
      'string.base': 'logo address field should be string',
      'string.uri': 'logo address must be a valid uri',
    }),
    establishmentDate: Joi.string().isoDate().messages({
      'string.base': 'establishment date field should be string',
      'string.isoDate': 'establishment date field must be in iso date format',
    }),
  }),
}

export default companySchemas
