import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      ;[, token] = req.headers.authorization.split(' ')

      // Verify token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decodedToken.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      // res.status(401)
      res.status(401).json({ error: 'Not authorized' })
      // throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, no token' })
  }
}

export default protect
