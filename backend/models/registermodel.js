const mongoose = require('mongoose');


const foodItemSchema=new mongoose.Schema({
    day:{type:String},
    mealtype:{type:String},
    description:{type:String},
    image:{type:String},
})

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
    
    serviceName:{ type: String },
    priceRange:{ type: String},
    location:{ type: String },
    foodType:{ type: String},

    foodItems:[foodItemSchema]

    
});

const registerModel = mongoose.model('RegisterdUserAndCook', registerSchema);

module.exports = registerModel;
