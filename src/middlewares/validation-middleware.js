const validate = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property])
  if (error) {
    res.status(422).json({ error: error.details[0].message })
  } else {
    next()
  }
}

export default validate
