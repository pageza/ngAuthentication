const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

require('dotenv').config()


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A first name is required'],
        minlength: [2, 'A first name must have at least 2 characters']
    },
    lastName: {
        type: String,
        required: [true, 'A last name is required'],
        minlength: [2, 'A last name must be at least 2 characters long']
    },
    email: {
        type: String,
        unique: [true, 'This email is already in use'],
        required: [true, 'An email is required'],
        match: [process.env.EMAIL_REGEX, 'Invalid email' ]
    },
    password: {
        type: String,
        required: [true, 'A password is required']
    }
}, {timestamps: {createdAt: 'Created at', updatedAt: 'Updated at'}})

UserSchema.plugin(plm)

module.exports = mongoose.model('User', UserSchema)
