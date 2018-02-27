const passport = require('passport');
const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcryptjs');

require('../config/passport')(passport);
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

// Handle user registration/login
router.post('/register', (req, res, next) => {
    // Check that all fields are filled out
    if( req.body.name && req.body.email && req.body.password && req.body.password2) {
        // Check that passwords match
        if(req.body.password === req.body.password2) {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            // Encrypting the password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) { 
                        let error = new Error(`Something went wrong: ${err}`);
                        res.send(error);
                    }
                    // New password is hashed password
                    newUser.password = hash;
                    // Store hash in password DB
                    User.create(newUser)
                        .then(newUserDB => res.send('New user created!'))
                        .catch(err => res.send(err))
                })
            })    
        }
        else { res.send('Passwords do not match'); }
    }
    else { res.send("Please fill all the fields"); }
    
});

// Handles user login process and authentication
router.post('/login', 
    passport.authenticate('local.signin'),
        (req, res) => {     
            res.send(req.user);
        }
);

// Get recipes names from Edamam
router.get('/search/:q', (req, res) => {
    Recipe.find({ keyword: req.params.q  })
        .then(response => res.send(response))
        .catch(err => console.error(err))
});

module.exports = router;