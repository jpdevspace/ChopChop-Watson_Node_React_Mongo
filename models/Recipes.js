const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    keyword: [String],
    ingredients: [String],
    instructions: [String],
    src: {type: String, trim: true}   
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;