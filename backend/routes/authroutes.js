const express = require('express');
const { registeredUser, loginuser } = require('../controllers/authcontroller');
const { cookprofile, addFoodItems } = require('../controllers/cookprofilecontroller');
const multer = require('multer');

const router = express.Router();


router.post('/signup', registeredUser);
router.post('/login', loginuser);


router.post('/cook', cookprofile);

const upload = multer({ dest: 'public/uploads/' });

router.post('/cook/food-items', upload.single('image'), addFoodItems);

module.exports = router;
