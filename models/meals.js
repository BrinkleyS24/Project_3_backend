const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    recipieName: {type: String, required: true},
    recipieThumb: String,
    price: Number,
    qty: Number,
}, {timestamps: true})

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;