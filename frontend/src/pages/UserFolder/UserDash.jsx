import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import {Button} from '@blueprintjs/core';
import { useNavigate } from "react-router";

const UserDash= () => {
  const navigate=useNavigate();
  const [cookDetails, setCookDetails] = useState([]);

  useEffect(() => {
    const fetchCooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/user/cooks");
        const data = await response.json();
        if (data && data.cookDetails) {
          setCookDetails(data.cookDetails);
        }
      } catch (error) {
        console.error("Error fetching cooks:", error);
      }
    };

    fetchCooks();
  }, []);

  const handleMenu = (cook) => {
    console.log("View menu for", cook.name);
    navigate('/viewmenu',{state:{name:cook.name,serviceName:cook.serviceName}})
  };

  return (
    <section className="min-h-screen ">
      <Navbar backgroundcolor="rgb(200, 0, 0)" />

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cookDetails.map((cook, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center border border-gray-300 h-[25vh] w-[70vh] rounded-3xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <div className="w-1/4 flex justify-center">
              <img
                src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`}
                className="border-2 border-gray-400 rounded-full w-20 h-20 object-cover"
                alt={cook.name}
              />
            </div>

            <div className="w-1/2 text-sm font-medium space-y-1">
              <h3><span className="font-semibold">Service:</span> {cook.serviceName}</h3>
              <h2><span className="font-semibold">Name:</span> {cook.name}</h2>
              <h4><span className="font-semibold">Price:</span> {cook.priceRange}</h4>
              <h4><span className="font-semibold">Food:</span> {cook.foodType}</h4>
              <h4><span className="font-semibold">Location:</span> {cook.location}</h4>
            </div>

            <div className="w-1/4 flex justify-center">
              <Button
                onClick={() => handleMenu(cook)}
             className="w-50 h-11 button text-white"
              >
                View Menu
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserDash;
