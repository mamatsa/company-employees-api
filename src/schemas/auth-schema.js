import Joi from 'joi'

const authSchema = Joi.object({
  email: Joi.string().required().email().messages({
    'string.base': 'email field should be string',
    'string.email': 'email field should have a valid email format',
    'any.required': 'email field is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'password field should be string',
    'any.required': 'password field is required',
  }),
})

export default authSchema
