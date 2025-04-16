import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import {Button} from '@blueprintjs/core';

function ViewMenu() {
  const [foodItems, setFoodItems] = useState({});
  const location = useLocation();
  const name = location.state?.name;
  const serviceName = location.state?.serviceName;

  useEffect(() => {
    const fetchFoodItems = async () => {
      if (!name || !serviceName) return;

      try {
        const response = await axios.get(
          `http://localhost:3000/api/auth/cook/view-food-items/${name}/${serviceName}`
        );

        const rawData = response.data;
        const organized = {};

        const normalize = (str) =>
          typeof str === "string" && str.length > 0
            ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
            : "";

        rawData.forEach((item, index) => {
          if (!item.day || !item.mealtype) {
            console.warn(`Skipping item at index ${index} due to missing day or mealType`, item);
            return;
          }

          const day = normalize(item.day);
          const mealType = normalize(item.mealtype);
          const key = `${day}_${mealType}`;

          // Clean the image path (remove "public/" and replace backslashes if on Windows)
          const cleanedPath = item.image?.replace(/^public[\\/]/, "").replace(/\\/g, "/");

          organized[key] = {
            imageUrl: item.image ? `http://localhost:3000/${cleanedPath}` : null,
            description: item.description || "No description provided",
          };
        });

        console.log("Organized food items:", organized);
        setFoodItems(organized);
      } catch (err) {
        console.error("Failed to load food items", err.message);
      }
    };

    fetchFoodItems();
  }, [name, serviceName]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];

  return (
    <div>
      <Navbar backgroundcolor="rgb(200, 0, 0)" />
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Weekly Meal Menu</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="font-bold text-center border p-2 bg-gray-200">Day / Meal</div>
          {meals.map((meal) => (
            <div key={meal} className="font-bold text-center border p-2 bg-gray-200">
              {meal}
            </div>
          ))}

          {days.map((day) => (
            <React.Fragment key={day}>
              <div className="font-semibold justify-center text-center border p-2 bg-gray-100">{day}</div>
              {meals.map((meal) => {
                const key = `${day}_${meal}`;
                const food = foodItems[key];

                return (
                  <div key={key} className="border p-2 text-center flex flex-col items-center">
                    {food?.imageUrl ? (
                      <>
                        <img
                          src={food.imageUrl}
                          alt={`${meal}`}
                          className="w-24 h-24 object-cover rounded shadow border border-gray-300"
                        />
                        <p className="mt-2 text-sm">{food.description}</p>
                      </>
                    ) : (
                      <span className="text-gray-400 italic">No item</span>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
          <Button  className="w-full h-11 button text-white">Make Agreement</Button>
        </div>
      </div>
    </div>
  );
}

export default ViewMenu;
