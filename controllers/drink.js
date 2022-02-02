const express = require('express');
const drinksRouter = express.Router();
const Drink = require('../models/drinks');

//Index 
drinksRouter.get("/", async (req, res) => {
    try {
        res.json(await Drink.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})


// Delete
drinksRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Drink.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update
drinksRouter.put("/:id", async (req, res) => {
    try {
        res.json(await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create
drinksRouter.post("/", async (req, res) => {
    try {
        res.json(await Drink.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = drinksRouter