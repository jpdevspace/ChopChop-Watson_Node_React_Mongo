const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        trim: true, 
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipes" 
        }
    ]
});

// On save hook, encrypt password
// Before saving a model run this function
// WARNING!!! Don't use ES6 () => {} it prevents the binding of this in const user = this;
userSchema.pre('save', function(next){  
    // Get access to the user model
    const user = this;

    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err) }

        // Hash/Encrypt password using the Salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }
            // Overwrite plain text password with encrypted password
            user.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }

        callback(null, isMatch);
    })
}
// Create Model Class
const User = mongoose.model('user', userSchema);

// Export Model
module.exports = User;