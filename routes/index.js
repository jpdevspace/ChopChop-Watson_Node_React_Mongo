const express = require('express');
const router = express.Router();
const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../config/passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// Users model used for MongoDB
const Recipes = require('../models/Recipes');
const User = require('../models/User');



// Get a specific recipe from Database
router.get('/search/:q', (req, res) => {
    Recipes.find({ keyword: req.params.q  })
        .then(response => res.send(response))
        .catch(err => console.error(err))
});

// Signup Users
router.post('/signup', Authentication.signup);

// Signin Users
router.post('/signin', requireSignin, Authentication.signin);

// Recipes saved by user
router.put('/save', (req, res) => {
    Recipes.findById(req.body.recipeId, (err, recipeDB) => {
        if (err) { console.log(err) }
        User.findByIdAndUpdate(req.body.userId, { $push: { recipes: recipeDB }}, { new: true })
            .then(updatedUser => res.send('Recipe Save'))
            .catch(err => console.error(err))
    })
})

// Load user's recipes
router.get('/dashboard/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(userDB => res.send(userDB))
        .catch(err => console.log(err))
}) 

module.exports = router;