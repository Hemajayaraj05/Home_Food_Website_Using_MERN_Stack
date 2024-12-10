const express=require('express')
const {registeredUser,loginuser}=require('../controllers/authcontroller')
const {cookprofile}=require('../controllers/cookprofilecontroller')

const router=express.Router();
router.post('/signup',registeredUser)
router.post('/login',loginuser);
router.post('/cook',cookprofile);


module.exports=router;
