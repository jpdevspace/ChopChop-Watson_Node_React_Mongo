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
            title: { type: String, required: true },
            keyword: [String],
            ingredients: [String],
            instructions: [String],
            src: {type: String, trim: true},
            completed: { type: Boolean, default: false } 
        }
    ]
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