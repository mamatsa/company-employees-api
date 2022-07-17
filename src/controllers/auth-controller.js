import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../models/index.js'

// @desc     Authenticate a user
// @route    POST /login
// @access   Public
export const login = async (req, res) => {
  const { email, password } = req.body

  // Find user using email
  const user = await User.findOne({ email })

  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        JWTToken: token,
      })
    } else {
      res.status(400).json({ error: 'wrong password' })
    }
  } else {
    res.status(400).json({ error: 'user with such email does not exists' })
  }
}
