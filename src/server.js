import 'dotenv/config'
import express from 'express'

const app = express()

app.use((req, res) => {
  res.status(200).json({ greeting: 'Hello World' })
})

app.listen(process.env.PORT)
