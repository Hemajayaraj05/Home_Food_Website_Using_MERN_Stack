import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Dialog } from "@blueprintjs/core";
import axios from "axios";

function AddItem() {
  const [isPopOpen, setIsOpen] = useState(false);
  const [currentMeal, setCurrentMeal] = useState({ day: "", mealType: "" });
  const [formData, setFormData] = useState({
    image: null,
    description: "",
  });

  // Open the dialog for adding food items
  const handleFood = (day, mealType) => {
    setCurrentMeal({ day, mealType });
    setIsOpen(true);
  };

  // Close the dialog
  const handlePopClose = () => {
    setIsOpen(false);
    setFormData({ image: null, description: "" });
  };

  // Submit food item data to the backend
  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("day", currentMeal.day);
    formDataToSend.append("mealType", currentMeal.mealType);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/cook/food-items",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Item added successfully!");
      console.log("Response:", response.data);
      handlePopClose();
    } catch (error) {
      console.error(
        "Error submitting food item:",
        error.response?.data || error.message
      );
    }
  };

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <Navbar backgroundcolor="rgb(200, 0, 0)" />
      <div className="flex flex-col gap-2 justify-between px-5 py-5 w-full">
        <div className="flex flex-row box-border border border-black">
          <div className="flex flex-col justify-center items-center box-border border-2 border-black w-1/4">
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

        {days.map((day) => (
          <div
            className="flex flex-row box-border border border-black"
            key={day}
          >
            <div className="flex flex-col justify-center items-center box-border border border-black w-1/4">
              <h1>{day}</h1>
            </div>
            {["Breakfast", "Lunch", "Dinner"].map((mealType) => (
              <div
                className="flex justify-center items-center box-border border border-black w-1/4"
                key={mealType}
              >
                <Button
                  onClick={() => handleFood(day, mealType)}
                  intent="success"
                  className="w-50 h-11 button-green text-black"
                >
                  Add Items
                </Button>
              </div>
            ))}
          </div>
        ))}

        <Dialog
          isOpen={isPopOpen}
          onClose={handlePopClose}
          title={`Add Items for ${currentMeal.day} - ${currentMeal.mealType}`}
        >
          <div className="flex flex-col p-5">
            <div className="flex flex-col gap-4">
              <label className="flex flex-col p-4">
                <b>Upload Image:</b>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              <label>
                <b>Description:</b>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="box-border border-2 border-black rounded p-2 w-full"
                />
              </label>
              <div className="flex justify-center items-center gap-5 mt-4">
                <Button onClick={handleSubmit} intent="success">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default AddItem;
