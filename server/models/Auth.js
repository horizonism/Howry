const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AuthSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})

let Auth = mongoose.model('Auth', AuthSchema)
module.exports = Auth