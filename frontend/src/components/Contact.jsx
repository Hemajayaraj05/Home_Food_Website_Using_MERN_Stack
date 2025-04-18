import React, { useState } from "react";
import { Button } from '@blueprintjs/core';
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaSnapchatSquare,
  FaYoutubeSquare
} from "react-icons/fa";

function Contact() {
  const [message, setMessage] = useState("");

  const handleQueries = () => {
    // Implement your query handling logic here
  };

  return (
    <section className="flex justify-between h-[400px] w-full bg-gray-700">
      {/* Social Media Section */}
      <div className="flex flex-row w-1/2">
        <div className="flex justify-center items-center w-full bg-gray-700 m-5 p-1">
          <div className="flex flex-col gap-2 relative justify-center items-center w-full h-full">
            <div className="flex pb-11">
              <h1 className="text-white"><i>Follow Us On</i></h1>
            </div>
            <div className="flex flex-row gap-10 relative justify-center items-center">
              {/* Facebook */}
              <button className="group relative flex flex-col items-center justify-between w-20 h-40 bg-yellow-100 text-white rounded-2xl font-semibold overflow-hidden">
                <span className="h-1/2 w-full flex items-center justify-center bg-red-600 transition-all duration-300 group-hover:h-0">Facebook</span>
                <span className="h-1/2 w-full flex items-center justify-center bg-red-800 text-xl transition-all duration-300 group-hover:h-full">
                  <FaFacebookSquare />
                </span>
              </button>

              {/* Instagram */}
              <button className="group relative flex flex-col items-center justify-between w-20 h-40 bg-yellow-100 text-white rounded-2xl font-semibold overflow-hidden">
                <span className="h-1/2 w-full flex items-center justify-center bg-red-600 transition-all duration-300 group-hover:h-0">Instagram</span>
                <span className="h-1/2 w-full flex items-center justify-center bg-red-800 text-xl transition-all duration-300 group-hover:h-full">
                  <FaInstagramSquare />
                </span>
              </button>

              {/* Twitter */}
              <button className="group relative flex flex-col items-center justify-between w-20 h-40 bg-yellow-100 text-white rounded-2xl font-semibold overflow-hidden">
                <span className="h-1/2 w-full flex items-center justify-center bg-red-600 transition-all duration-300 group-hover:h-0">Twitter</span>
                <span className="h-1/2 w-full flex items-center justify-center bg-red-800 text-xl transition-all duration-300 group-hover:h-full">
                  <FaTwitterSquare />
                </span>
              </button>

              {/* Snapchat */}
              <button className="group relative flex flex-col items-center justify-between w-20 h-40 bg-yellow-100 text-white rounded-2xl font-semibold overflow-hidden">
                <span className="h-1/2 w-full flex items-center justify-center bg-red-600 transition-all duration-300 group-hover:h-0">Snapchat</span>
                <span className="h-1/2 w-full flex items-center justify-center bg-red-800 text-xl transition-all duration-300 group-hover:h-full">
                  <FaSnapchatSquare />
                </span>
              </button>

              {/* YouTube */}
              <button className="group relative flex flex-col items-center justify-between w-20 h-40 bg-yellow-100 text-white rounded-2xl font-semibold overflow-hidden">
                <span className="h-1/2 w-full flex items-center justify-center bg-red-600 transition-all duration-300 group-hover:h-0">YouTube</span>
                <span className="h-1/2 w-full flex items-center justify-center bg-red-800 text-xl transition-all duration-300 group-hover:h-full">
                  <FaYoutubeSquare />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Query Section */}
      <div className="flex box-border border-2 border-gray-700 w-1/2 bg-gray-700">
        <div className="flex flex-col gap-5 justify-center items-center box-border border-2 border-gray-700 m-6 p-4 w-full">
          <h1 className="text-white"><i>For Any Queries</i></h1>
          <input
            type="text"
            className="flex text-center px-4 py-2 w-1/2 h-full border-box border border-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 overflow-x-auto"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Queries"
          />
          <div className="flex items-center">
            <Button
              intent="success"
              className="w-20 h-11 button text-white"
              onClick={handleQueries}>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
