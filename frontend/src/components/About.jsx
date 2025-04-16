import React from "react";

function About() {
  return (
    <section className="relative flex flex-col items-center h-[400px] bg-[#f5f5f5] p-4 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      <div className="flex gap-10 justify-between items-center">
        <div className="flex flex-col justify-center items-center box-border border h-[200px]  drop-shadow-xl shadow-2xl rounded-xl bg-white p-4">
          <h2 className="mb-2 text-center text-xl font-semibold">🍽️ A Flavorful Journey</h2>
          <p className="text-black text-center">Every dish tells a story, crafted to leave an impression.</p>
        </div>

        <div className="flex flex-col justify-center items-center box-border border h-[200px] drop-shadow-xl shadow-2xl rounded-xl bg-white p-4">
          <h2 className="mb-2 text-center text-xl font-semibold">💎 Uncompromising Quality</h2>
          <p className="text-black text-center">We don’t settle for less, and neither should you.</p>
        </div>

        <div className="flex flex-col justify-center items-center box-border border h-[200px] drop-shadow-xl shadow-2xl rounded-xl bg-white p-4">
          <h2 className="mb-2 text-center text-xl font-semibold">🚚 Delivered to Your Doorstep</h2>
          <p className="text-black text-center">Enjoy restaurant-quality meals in the comfort of your home.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
