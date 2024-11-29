const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password: { type: String, required: true },
    usertype: { 
        type: String, 
        enum: ['cook', 'user'], 
        default: 'user', 
        required: true 
    }
});

const registerModel = mongoose.model('RegisterdUserAndCook', registerSchema);

module.exports = registerModel;
