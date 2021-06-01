const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    country: {type: String, required: true},
    gender: {type: String, required: true, enum: ['male', 'female']},
    age: {type: Number, required: true, min: 10},
    links: [{type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('User', schema)