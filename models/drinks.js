const mongoose = require('mongoose')

const drinksSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    price: String,
    quantity: String,
}, {timestamps: true})

const Drinks = mongoose.model('Drinks', drinksSchema)

module.exports = Drinks