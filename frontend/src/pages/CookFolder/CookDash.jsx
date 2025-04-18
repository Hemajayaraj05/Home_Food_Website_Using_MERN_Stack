import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Toaster, Intent } from "@blueprintjs/core";
import { useNavigate } from "react-router";
import axios from "axios";
import { POSITION_TOP } from "@blueprintjs/core/lib/esm/common/classes";

const AppToaster = Toaster.create({
    position: POSITION_TOP
});

function CookDash() {
    const navigate = useNavigate();
    const [form, setFormData] = useState({
        name: '',
        serviceName: '',
        priceRange: '',
        location: '',
        foodType: '',
    });

    const handleChange = (e) => {
        setFormData({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        const { name, serviceName, priceRange, location, foodType } = form;

        if (!name || !serviceName || !priceRange || !location || !foodType) {
            AppToaster.show({
                message: "Please Fill up All the fields",
                timeout: 3000,
                intent: Intent.WARNING
            });
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                AppToaster.show({
                    message: "Unauthorized: Please login again",
                    intent: Intent.DANGER
                });
                navigate('/login');
                return;
            }

            const response = await axios.post(
                "http://localhost:3000/api/auth/cook",
                form,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            console.log(response);
            AppToaster.show({
                message: "Profile Created Successfully",
                intent: Intent.SUCCESS
            });
           
        } catch (err) {
            console.error("Error creating profile:", err);
            AppToaster.show({
                message: "Error in Profile Creation",
                intent: Intent.DANGER
            });
        }
    }
    const handleAddItems=()=>{
        navigate('/add-items');

    }

    return (
        <div className="flex flex-col">
              <Navbar backgroundcolor="rgb(200, 0, 0)" />
            <div className="flex flex-row w-full h-screen">
                <div className="flex w-1/2">
                    <img className="flex h-screen w-full" src="/Foodie.jpg" alt="Image of the foodie" />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                    <form className="flex p-4 pt-9 drop-shadow-lg shadow-lg  bg-white rounded-xl">
                        <div className="flex flex-col gap-5">
                            <input
                                type="text"
                                name="name"
                                className="flex text-center text-black w-full px-[100px] py-2 border-2 border-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 drop-shadow-lg shadow-lg"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange} />
                            <input
                                type="text"
                                className="flex text-center text-black w-full px-4 py-2 border-2  border-blue-950  rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 drop-shadow-lg shadow-lg"
                                name="serviceName"
                                value={form.serviceName}
                                placeholder="Enter Name of your Service"
                                onChange={handleChange} />
                            <input
                                type="text"
                                className="flex text-center text-black w-full px-4 py-2 border-2  border-blue-950  rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 drop-shadow-lg shadow-lg"
                                name="priceRange"
                                placeholder="Price Range"
                                value={form.priceRange}
                                onChange={handleChange} />
                            <input
                                type="text"
                                name="location"
                                className="flex text-center text-black w-full px-4 py-2 border-2  border-blue-950  rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 drop-shadow-lg shadow-lg"
                                placeholder="Location"
                                value={form.location}
                                onChange={handleChange} />

                            <select
                                name="foodType"
                                value={form.foodType}
                                onChange={handleChange}
                                className="flex text-center text-black w-full px-4 py-2 border-2 border-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 drop-shadow-lg shadow-lg">
                                <option value="">Select Type of Food</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>

                            <div className="flex justify-center items-center gap-5 mt-4">
                            <Button
                                onClick={handleSubmit}
                                intent="success"
                                className="w-50 h-11 button text-black">Create Profile</Button>
                            </div>
                            
                        </div>
                    </form>
                        <div className="flex justify-center items-center gap-5 mt-4">
                                <Button
                                onClick={handleAddItems}
                                intent="success"
                                className="w-50 h-11 button text-black">Add Items👨‍🍳</Button>
                            </div>
                </div>
            </div>
        </div>
    );
}

export default CookDash;
