const express=require('express')
const {registeredUser,loginuser}=require('../controllers/authcontroller')

const router=express.Router();
router.post('/signup',registeredUser)
router.post('/login',loginuser);

module.exports=router;