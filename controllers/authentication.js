const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config/config');

const tokenForUser = user => {
    // sub stands for subject (it's convention)
    // iat stands for issued at time
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    // User has already had their email and password authenticated
    // We just need to give them a token and the info we need in the front end
    const userInfo = { 
        name:   req.user.name,
        userId: req.user._id,
        token:  tokenForUser(req.user),
        recipes: req.user.recipes
    }
    res.send({ userInfo });
}

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // Check that all fields are filled
    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide both email and password' });
    }

    // Check if user with a given email exists
    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }
        
        // If user with email does exist, return an error
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        const newUser = ({
            email: email,
            password: password,
            name: name
        });

        User.create(newUser, (err, user) => {
            if (err) { return next(err) }
            if (user) {
                // Respond to request indicating the user was created
                const userInfo = { 
                    name:   user.name,
                    userId: user._id,
                    token:  tokenForUser(user)
                }
                res.send({ userInfo });  
            }
        })
    }); 
}