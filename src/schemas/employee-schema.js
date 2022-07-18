import Joi from 'joi'

const employeeSchemas = {
  addEmployee: Joi.object({
    company: Joi.string().required().messages({
      'any.required': 'company id is required',
      'string.base': 'company id should be string',
    }),
    name: Joi.string().required().messages({
      'any.required': 'name field is required',
      'string.base': 'name field should be string',
    }),
    lastName: Joi.string().required().messages({
      'any.required': 'last name field is required',
      'string.base': 'last name field should be string',
    }),
    startDate: Joi.string().isoDate().required().messages({
      'any.required': 'start date field is required',
      'string.base': 'start date field should be string',
      'string.isoDate': 'start date field must be in iso date format',
    }),
    birthDate: Joi.string().isoDate().required().messages({
      'any.required': 'birth date field is required',
      'string.base': 'birth date field should be string',
      'string.isoDate': 'birth date field must be in iso date format',
    }),
    personalID: Joi.string().required().messages({
      'any.required': 'personal id field is required',
      'string.base': 'personal id field should be string',
    }),
    jobPosition: Joi.string().required().messages({
      'any.required': 'job position field is required',
      'string.base': 'job position field should be string',
    }),
  }),
  updateEmployee: Joi.object({
    company: Joi.string().messages({
      'string.base': 'company id should be string',
    }),
    name: Joi.string().messages({
      'string.base': 'name field should be string',
    }),
    lastName: Joi.string().messages({
      'string.base': 'last name field should be string',
    }),
    startDate: Joi.string().isoDate().messages({
      'string.base': 'start date field should be string',
      'string.isoDate': 'start date field must be in iso date format',
    }),
    birthDate: Joi.string().isoDate().messages({
      'string.base': 'birth date field should be string',
      'string.isoDate': 'birth date field must be in iso date format',
    }),
    personalID: Joi.string().messages({
      'string.base': 'personal id field should be string',
    }),
    jobPosition: Joi.string().messages({
      'string.base': 'job position field should be string',
    }),
  }),
}

export default employeeSchemas
