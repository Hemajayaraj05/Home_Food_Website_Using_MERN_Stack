const express = require('express');
const { registeredUser, loginuser } = require('../controllers/authcontroller');
const { cookprofile, addFoodItems,getAllCooks,getFoodItemsByCook} = require('../controllers/cookprofilecontroller');
const multer = require('multer');
const verifyToken = require('../middleware/verifytoken');
const router = express.Router();


router.post('/signup', registeredUser);
router.post('/login', loginuser);


router.post('/cook',verifyToken, cookprofile);

const upload = multer({ dest: 'public/uploads/' });

router.post('/cook/food-items', verifyToken,upload.single('image'), addFoodItems);
router.get('/user/cooks',getAllCooks);
router.get("/cook/view-food-items/:name/:serviceName", getFoodItemsByCook);

module.exports = router;
