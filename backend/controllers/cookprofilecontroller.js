const registerModel = require('../models/registermodel'); 

exports.cookprofile=async(req,res)=>{

    const {name,serviceName,priceRange,location,foodType}=req.body;
        if(!name || !serviceName || !priceRange ||!location || !foodType)
        {
            return res.status(400).json({message:"All fields are required"});
        }
     try{
        const existingUser = await registerModel.findOne({ name });
        
        if (existingUser) {
        
            existingUser.serviceName = serviceName;
            existingUser.priceRange = priceRange;
            existingUser.location = location;
            existingUser.foodType = foodType;
    
            await existingUser.save();
                res.status(201).json({message:"Profile Created Successfully"});
          
      
           }
           else
           {
            console.log("Error in the creation of profile");
           }
    }
    catch(err)
    {
        return res.status(500).json({message:"Internal server error in the page add items"});
    }

}

exports.addFoodItems = async (req, res) => {
    const { userId, description } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const user = await registerModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        const foodItemData = {
            day: req.body.day,
            mealtype: req.body.mealType,
            description,
            image: imagePath,
        };
        user.foodItems.push(foodItemData);
        await user.save();
        res.status(201).json({ message: "Food Item added Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding food items" });
    }
};
