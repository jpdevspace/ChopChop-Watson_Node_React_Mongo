import axios from 'axios';

export default {
    // Find recipes from DB
    searchRecipes: query => axios.get(`/search/${query}`),
    // User registration
    userSignup: query => axios.post('/signup', query),
    // User login
    userLogin:  query => axios.post('/signin', query),
    // Save recipes
    saveRecipe: query => axios.put('/save', query),
    // Get User's Recipes
    getUserRecipes: userId => axios.get(`/dashboard/${userId}`),
    // Remove recipes
    removeRecipe: recipeInfo => axios.put('/dashboard/remove', recipeInfo),
    // Mark recipe as completed
    completeRecipe: recipeInfo => axios.put('/dashboard/complete', recipeInfo)
}