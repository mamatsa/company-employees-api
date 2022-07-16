import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(
      colors.underline.cyan(`MongoDB Connected: ${conn.connection.host}`)
    )

    return conn
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
  return null
}

export default connectDB
