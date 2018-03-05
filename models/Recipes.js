const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    keyword: [String],
    ingredients: [String],
    instructions: [String],
    src: {type: String, trim: true},
    completed: { type: Boolean, default: false }   
});

const Recipes = mongoose.model('Recipes', RecipeSchema);

module.exports = Recipes;