const validate = (schema, property) => async (req, res, next) => {
  const { error } = await schema.validate(req[property])
  if (error) {
    res.status(422).json({ error: error.details[0].message })
  } else {
    next()
  }
}

export default validate
