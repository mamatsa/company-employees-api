import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../models/index.js'

// @desc     Authenticate a user
// @route    POST /login
// @access   Public
export const login = async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      JWTToken: token,
    })
  } else {
    res.status(400)
  }
}
