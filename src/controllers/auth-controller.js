import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../models/index.js'

// @desc     Authenticate a user
// @route    POST /login
// @access   Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user using email
    const user = await User.findOne({ email })
    if (!user) {
      const error = new Error('wrong email or password')
      error.statusCode = 400
      throw error
    }

    // Check if password is valid
    if (!(await bcrypt.compare(password, user.password))) {
      const error = new Error('wrong email or password')
      error.statusCode = 400
      throw error
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      JWTToken: token,
    })
  } catch (e) {
    res.status(e.statusCode || 500).json({ error: e.message })
  }
}
