import axios from 'axios';

export default {
    // Find recipes from DB
    searchRecipes: query => axios.get(`/search/${query}`),
    // User registration
    userSignup: query => axios.post('/signup', query),
    // User login
    userLogin:  query => axios.post('/signin', query),
    // Save recipes
    saveRecipe: (userId, recipeId) => axios.put(`/${userId}/save/${recipeId}`),
    // Get User's Recipes
    getUserRecipes: userId => axios.get(`/recipes/${userId}`)
}