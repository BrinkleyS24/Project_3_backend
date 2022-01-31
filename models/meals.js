const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    recipieName: String,
    recipieThumb: String,
    price: Number,
    qty: Number,
})

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;