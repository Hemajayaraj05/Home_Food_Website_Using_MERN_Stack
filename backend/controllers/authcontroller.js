const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerModel = require('../models/registermodel'); 

exports.registeredUser = async (req, res) => {
    const { name, email, password, usertype } = req.body;

    if (!name || !email || !password || !usertype) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {

        const existingUser = await registerModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new registerModel({
            name,
            email,
            password: hashedPassword,
            usertype
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.loginuser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const findUser=await registerModel.findOne({email});
        if(!findUser)
        {
            return res.status(400).json({message:"Invalid Email"});
        }
        const isMatch=await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign({ id: findUser._id, name: findUser.name }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json({token,usertype:findUser.usertype});
    }
    catch(err){
        console.error('Invalid User Credentials!',err);
        res.status(500).json({message:'Internal server error'});

    }
}
