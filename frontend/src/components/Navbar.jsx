import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import cook from "/src/assets/cook-removebg-preview.png";
import {Link} from "react-router-dom"

function Navbar({backgroundcolor}) {
  const navbarstyle={
    backgroundColor:backgroundcolor||"none",
    color:"white",

  }
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center text-white font-semibold px-4 py-2 relative   bg-black/20" style={navbarstyle}>
     
      <div className="flex flex-row ml-11 ">
        <img src={cook}  alt="Logo" className="h-[10vh] rounded-sm w-[30px]"/>
       
      <h2 className="flex flex-row mt-8 ">COMFORT CRAVE</h2>
      </div>

  
      <div className="hidden md:block text-white mr-11">

        <nav >
          <ul className="flex gap-10">
          
            <li><Link to="/home" className="text-white">Home</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
            <li><Link to="/signup" className="text-white">SignUp</Link></li>
          </ul>
        </nav>
      </div>

     
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden text-white text-2xl">
        <VscThreeBars />
      </button>

     
      {toggleMenu && (
        <nav className="absolute top-12 left-0  bg-gray-400 w-full p-4 shadow-md md:hidden ">
          <ul className="flex flex-col text-white gap-4 text-center">
          <li><Link to="/home" className="text-white">Home</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
            <li><Link to="/signup" className="text-white">SignUp</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
