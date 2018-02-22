import axios from 'axios';

export default {
    // Find recipes from 
    searchRecipes: query => axios.get(`/search/${query}`),
    // User login and registration
    user: query => axios.post('/register', query)
}