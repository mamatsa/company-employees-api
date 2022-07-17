const validate = (schema, property) => async (req, res, next) => {
  const { error } = await schema.validate(req[property])
  if (error) {
    console.log(1)
    res.status(422).json({ error: error.details[0].message })
  } else {
    console.log(2)
    next()
  }
}

export default validate
