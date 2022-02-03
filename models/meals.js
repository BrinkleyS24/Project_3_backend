const mongoose = require('mongoose');


const mealsSchema = new mongoose.Schema({
    recipeName: {type: String, required: true},
    recipeThumb: String,
    price: String,
    qty: String,
}, {timestamps: true})

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;