const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const verify = require('./routes/verifyToken')

const app = express()

app.use('', (req, res) => {
  console.log('/ route working')
  res.send('Welcome to hOdonto API')
})

// fetch form data from the request.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes Middleware
app.use('/api/v1', authRoute)
app.use('/api/v1', verify, userRoute)

// Assign the port
var port = process.env.port || 3000
console.log('port', port)
app.listen(port, () => console.log('server running at port ' + port))
