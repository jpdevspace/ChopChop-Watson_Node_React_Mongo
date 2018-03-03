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








// // Handle saving recipes
// router.put('/save/:userId/:recipeId', (req, res) => {
//     User.findByIdAndUpdate(req.params.userId, {
//         $push: { recipes: (req.params.recipeId) }
//     }, { new: true })
//         .then(updatedUser => res.send('Recipe Save'))
//         .catch(err => console.error(err))
// });

// // Display all recipes from a specific user
// router.get('/recipes/:userId', (req, res) => {
//     User.findById(req.params.userId)
//         .populate("recipes")
//         .then(userRecipes => res.json(userRecipes))
//         .catch(err => console.error(err))
// })

module.exports = router;