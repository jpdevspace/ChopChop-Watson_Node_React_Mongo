const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        trim: true, 
        unique: true,
        required: true
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

const User = mongoose.model('User', UserSchema);

module.exports = User;