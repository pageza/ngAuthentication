const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

mongoose.connect(
    'mongodb://' + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

const models_path = path.join(__dirname + './../models')

fs.readdirSync(models_path).forEach( (file) => {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file)
    }
})
