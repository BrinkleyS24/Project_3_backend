const express = require('express');
const mealsRouter = express.Router();
const Meal = require('../models/meals');

//Index 
mealsRouter.get("/", async (req, res) => {
    try {
        res.json(await Meal.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})


// Delete
mealsRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Meal.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update
mealsRouter.put("/:id", async (req, res) => {
    try {
        res.json(await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create
mealsRouter.post("/", async (req, res) => {
    try {
        res.json(await Meal.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = mealsRouter