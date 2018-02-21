const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
// Users model used for MongoDB
const Recipe = require('../models/Recipes');

// Route to create recipes
router.get('/database', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/database.html"));
    
});
// Handle recipe creation in database
router.post('/createRecipe', (req, res) => {
    console.log(req.body);
    let newIngredientsStr = req.body.ingredients;
    let newIngredientsArr = newIngredientsStr.split('\r\n');

    let newInstructionsStr = req.body.instructions;
    let newInstructionsArr = newInstructionsStr.split('\r\n');

    let newRecipe = {
        title: req.body.title,
        ingredients: newIngredientsArr,
        instructions: newInstructionsArr
    }

    Recipe.create(newRecipe)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    
    res.redirect('/database');
});

// Get recipes names from Edamam
router.get('/search/:q', (req, res) => {
    Recipe.find({ keyword: req.params.q  })
        .then(response => res.send(response))
        .catch(err => console.error(err))
});

module.exports = router;