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
        requir5ed: true 
    },
    //Cook-profile-details
    
    serviceName:{ type: String, required: true },
    priceRange:{ type: String, required: true },
    location:{ type: String, required: true },
    foodType:{ type: String, required: true },
});

const registerModel = mongoose.model('RegisterdUserAndCook', registerSchema);

module.exports = registerModel;
