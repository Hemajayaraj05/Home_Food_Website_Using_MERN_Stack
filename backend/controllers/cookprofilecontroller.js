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
  const { description, day, mealType } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const userId = req.user.id;
    const user = await registerModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Check for duplicate entry inside embedded foodItems array
    const exists = user.foodItems.find(
      (item) => item.day === day && item.mealtype === mealType
    );

    if (exists) {
      return res.status(400).json({ message: "Item already exists for this slot" });
    }

    // Add new food item to embedded array
    user.foodItems.push({
      day,
      mealtype: mealType, // use `mealtype` here to match the schema
      description,
      image: imagePath,
    });

    await user.save();

    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    res.status(200).json({
      message: "Item added successfully",
      imageUrl,
    });
  } catch (error) {
    console.error("Error adding food item:", error);
    res.status(500).json({ message: "Server error" });
  }
};

  
  exports.getAllCooks = async (req, res) => {
    try {
        // Fetch all cooks with the role of "cook"
        const cooks = await registerModel.find({ usertype: "cook" });

        // Check if no cooks are found
        if (cooks.length === 0) {
            return res.status(404).json({ message: "No cooks found" });
        }

        // Log the fetched cooks for debugging purposes
        console.log("Fetched cooks:", cooks);

        // Format the data to return the necessary details
        const cookDetails = cooks.map(cook => ({
            serviceName: cook.serviceName || "N/A",
            name: cook.fullName || cook.name || "Unknown",
            priceRange: cook.priceRange || "N/A",
            foodType: cook.foodType || "N/A",
            location: cook.location || "N/A",
            profilePic: cook.profilePic || null,
        }));

        // Return the formatted cook details in the response
        res.status(200).json({ cookDetails });
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching cook details:", error);

        // Return a 500 error with a message
        res.status(500).json({ message: "Server error while fetching cook details" });
    }
};


exports.getFoodItemsByCook = async (req, res) => {
  const { name, serviceName } = req.params;

  try {
    const user = await registerModel.findOne({ name, serviceName });
 
    if (!user || !user.foodItems || user.foodItems.length === 0) {
      return res.status(404).json({ message: "No food items found for this cook." });
    }
   
    res.json(user.foodItems); // Just send the foodItems array
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({ message: "Server error while fetching food items." });
  }
};
