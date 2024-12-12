import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Dialog } from "@blueprintjs/core";
import axios from "axios";


function AddItem(){
  const [isPopOpen,setIsOpen]=useState(false);
  const [currentDay,setCurrentDay]=useState("");
  const [formData,setFormData]=useState({
    image:null,
    description:"",
  })
  const handleFood=(day)=>{
    setCurrentDay(day);
    setIsOpen(true);
  }

  const handlePopClose=()=>{
    setIsOpen(false);
    setFormData({image:null,description:""})

  }
  const handleEditFood=()=>{

  }
  const handleSubmit=()=>{
    const formDataToSend = new FormData();
    formDataToSend.append("day", currentDay);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);

  }

  const handleInputChange=()=>{
    const { name, value }=e.target;
    setFormData({ ...formData,[name]: value });

  }

  const handleFileChange=()=>{
    setFormData({ ...formData, image: e.target.files[0] });
  }

  const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  return <div>
            <Navbar backgroundcolor="rgb(200, 0, 0)" />
          <div className="flex flex-col gap-2 justify-between px-5 py-5 w-full">
              <div className="flex flex-row  box-border border border-black  ">

                <div className="flex flex-col  justify-center items-center box-border border-2 border-black w-1/4">
                    <h1>Day</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center box-border border-2 border-black w-1/4">
                    <h1>Breakfast</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center box-border border-2 border-black w-1/4">
                    <h1>Lunch</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center box-border border-2 border-black w-1/4">
                    <h1>Dinner</h1>
                </div> 
              </div>



                {days.map((day)=>(
                  
                <div className="flex flex-row  box-border border border-black  " key={day}>

                  <div className="flex flex-col  justify-center items-center box-border border border-black w-1/4">
                      <h1>{day}</h1>
                    </div>
                      {[...Array(3)].map((_,index)=>(
                        <div className="flex justify-center items-center box-border border border-black w-1/4" key={index}>
                          <Button
                            onClick={()=>handleFood(day)}
                            intent="success"
                            className="w-50 h-11 button-green text-black">Add Items</Button>
                          <Button
                            onClick={handleEditFood}
                            intent="success"
                            className="w-50 h-11 button text-black">Edit Items</Button>
                        </div>
                    ))}  
                </div>  ))} 

               
                <Dialog
                isOpen={isPopOpen}
                onClose={handlePopClose}
                title={`Add Items for ${currentDay}`}
                >
                   <div className="flex flex-col drop-shadow-lg shadow-lg shadow-red-500 p-5">
                    <div className="flex flex-col gap-4">
                      <label>
                        Upload Image:
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                      </label>
                      <label>
                        <h3 className=" text-black">Description:<br/>
                          Add the Food Menu To Be Served</h3>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="border rounded p-2 w-full"
                        />
                      </label>
                      <div className="flex justify-center items-center gap-5 mt-4">
                            <Button
                                onClick={handleSubmit}
                                intent="success"
                                className="w-50 h-11 button text-black">Submit</Button>
                            </div>
                    </div>
                  </div>
                </Dialog>
                
    </div>
    </div>
   


}
export default AddItem;