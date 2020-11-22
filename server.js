const express = require('express')

const app = express()
require('dotenv').config()

app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(process.env.PORT, () => console.log('Running on port: ' + process.env.PORT))
