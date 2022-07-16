import 'dotenv/config'
import promptSync from 'prompt-sync'
import bcrypt from 'bcryptjs'
import colors from 'colors'
import connectDB from '../config/mongo.js'
import { User } from '../models/index.js'

const prompt = promptSync({ sigint: true })

const name = prompt('Enter User name: '.cyan)
const email = prompt('Enter User email: '.cyan)
const password = prompt('Enter User password: '.cyan)

;(async () => {
  try {
    const mongoose = await connectDB()

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    await User.create({ name, email, password: hashedPassword })

    await mongoose.connection.close()

    console.log(
      `User created. Name: ${colors.green(name)}, Email: ${colors.green(
        email
      )}, Password: ${colors.green(password)}`.italic
    )
  } catch (e) {
    console.log(e)
  }
})()
