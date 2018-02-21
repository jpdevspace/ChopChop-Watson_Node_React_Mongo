const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: [],
    instructions: []   
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;