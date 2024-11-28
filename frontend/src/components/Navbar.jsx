import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import Logoimg from "/src/assets/Logoimg.jpg";
import {Link} from "react-router-dom"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between bg-primary items-center text-white font-semibold px-4 py-2 relative">
     
      <div className="ml-2">
        <img src={Logoimg}  alt="Logo" className="h-8 rounded-2xl w-9"/>
        
      </div>

  
      <div className="hidden md:block text-white">
        <nav>
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
