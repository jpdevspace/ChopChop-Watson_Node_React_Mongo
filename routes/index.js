const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
// Users model used for MongoDB
// const Users = require('../models/Users');

// Get recipes names from Edamam
router.get('/search/:q', (req, res) => {
    // Query search term
    let query = req.params.q;
    // Edamam API keys
    let appID = process.env.EDAMAM_APP_ID;
    let appKey = process.env.EDAMAM_APP_KEY;

    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&from=0&to=2`)
        .then( edamamRes => {
            res.send(edamamRes.data.hits);
        })
        .catch(error => console.log(error))
});

module.exports = router;