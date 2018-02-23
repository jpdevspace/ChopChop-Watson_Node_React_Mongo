const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
// Users model used for MongoDB
const Recipe = require('../models/Recipes');
const User = require('../models/Users');

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

// Handle user registration
router.post('/register', (req, res) => {
    console.log(req.body);
    // If user is signing up
    if (req.body.name.length >= 1 ) {
        if(req.body.password === req.body.password2) {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            User.create(newUser)
        }
        else {
            res.send('Passwords do not match');
        }

    }
    else {
        console.log('user wants to login')
    }
});

// Get recipes names from Edamam
router.get('/search/:q', (req, res) => {
    Recipe.find({ keyword: req.params.q  })
        .then(response => res.send(response))
        .catch(err => console.error(err))
});

module.exports = router;