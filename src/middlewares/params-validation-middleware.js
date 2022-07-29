import mongoose from 'mongoose'

const validateParams = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(422).json({ error: 'wrong id formation in params' })
  } else {
    next()
  }
}

export default validateParams
