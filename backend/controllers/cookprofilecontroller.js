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
        
                const  newProfile=new registerModel
                ({
                    name,
                    serviceName,
                    priceRange,
                    location,
                    foodType,

                })

                await newProfile.save();
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