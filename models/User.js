const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 12
    },
    email: {
        type: String,
        trim: true, // 띄어쓰기를 없애주는 역할 //
        unique: 1
    },
    password: {
        type: String,
        minlength: 8
    },
    lastname: {
        type: String,
        maxlength: 12
    },
    role: { // 유저가 관리자가 될 수도, 일반 유저가 될 수도 있으니 역할 부여 //
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}