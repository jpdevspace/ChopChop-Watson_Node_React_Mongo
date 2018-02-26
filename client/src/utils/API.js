import axios from 'axios';

export default {
    // Find recipes from 
    searchRecipes: query => axios.get(`/search/${query}`),
    // User registration
    userRegistration: query => axios.post('/register', query),
    // User login
    userLogin:  query => axios.post('/login', query)
}