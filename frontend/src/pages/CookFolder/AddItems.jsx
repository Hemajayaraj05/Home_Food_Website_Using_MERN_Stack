
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Dialog } from "@blueprintjs/core";
import axios from "axios";

function AddItem() {
  const [isPopOpen, setIsOpen] = useState(false);
  const [currentMeal, setCurrentMeal] = useState({ day: "", mealType: "" });
  const [formData, setFormData] = useState({ image: null, description: "" });
  const [foodItems, setFoodItems] = useState({}); // Store by key

  const handleFood = (day, mealType) => {
    setCurrentMeal({ day, mealType });
    setIsOpen(true);
  };

  const handlePopClose = () => {
    setIsOpen(false);
    setFormData({ image: null, description: "" });
  };
  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("day", currentMeal.day);
    formDataToSend.append("mealType", currentMeal.mealType);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);
  
    const token = localStorage.getItem("authToken");
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/cook/food-items",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      alert("Item added successfully!");
  
      const key = `${currentMeal.day}_${currentMeal.mealType}`;
      setFoodItems((prev) => ({
        ...prev,
        [key]: {
          imageUrl: response.data.imageUrl,
          description: formData.description,
        },
      }));
  
      handlePopClose();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // <- Show backend error message clearly
      } else {
        console.error("Error submitting food item:", error);
        alert("Something went wrong while adding the item.");
      }
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
      <Navbar backgroundcolor="rgb(200, 0, 0)" />
      <div className="flex flex-col gap-2 justify-between px-5 py-5 w-full">
        <div className="flex flex-row box-border border border-black">
          <div className="w-1/4 flex justify-center items-center border-2 border-black">
            <h1>Day</h1>
          </div>
          <div className="w-1/4 flex justify-center items-center border-2 border-black">
            <h1>Breakfast</h1>
          </div>
          <div className="w-1/4 flex justify-center items-center border-2 border-black">
            <h1>Lunch</h1>
          </div>
          <div className="w-1/4 flex justify-center items-center border-2 border-black">
            <h1>Dinner</h1>
          </div>
        </div>

        {days.map((day) => (
          <div key={day} className="flex flex-row border border-black">
            <div className="w-1/4 flex justify-center items-center border border-black">
              <h1>{day}</h1>
            </div>
            {["Breakfast", "Lunch", "Dinner"].map((mealType) => {
              const key = `${day}_${mealType}`;
              const foodItem = foodItems[key];

              return (
                <div key={mealType} className="w-1/4 flex flex-col items-center border border-black p-2">
                  <Button
                    onClick={() => handleFood(day, mealType)}
                    intent={foodItem ? "warning" : "success"}
                    className="w-40 h-11 text-black"
                  >
                    {foodItem ? "Edit Items" : "Add Items"}
                  </Button>

                  {foodItem && (
                    <div className="text-center mt-2">
                      <img
                        src={foodItem.imageUrl}
                        alt="Food"
                        className="w-20 h-20 object-cover rounded mx-auto"
                      />
                      <p className="text-sm mt-1">{foodItem.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <Dialog
          isOpen={isPopOpen}
          onClose={handlePopClose}
          title={`Add Items for ${currentMeal.day} - ${currentMeal.mealType}`}
        >
          <div className="flex flex-col p-5 gap-4">
            <label>
              <b>Upload Image:</b>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
            <label>
              <b>Description:</b>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="border-2 border-black rounded p-2 w-full"
              />
            </label>
            <div className="flex justify-center mt-4">
              <Button onClick={handleSubmit} intent="success">
                Submit
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default AddItem;

