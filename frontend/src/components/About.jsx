import React from "react";
function  About(){
    return(
        <section className="relative flex justify-center items-center h-[500px] bg-cover bg-center bg-[#f5f5f5] ">

            <div className="flex gap-10 justify-center items-center ">
                     <img
                        src="ab1.jpg.png"
                        alt="Decorative Top Left"
                        className="absolute -top-1 -left-3 w-[330px] "
                    />
                <div className="flex flex-col justify-center items-center box-border border h-[200px] drop-shadow-xl shadow-2xl rounded-xl bg-white">
                    <h1 className="m-5">A Flavorful Journey</h1>
                    <p className="m-4 text-black"> Every dish tells a story, crafted to leave an impression.</p>   
                   
                </div>

                <div className="flex flex-col justify-center items-center box-border border  h-[200px] drop-shadow-xl shadow-2xl rounded-xl  bg-white">
                    <h1 className="m-5">Uncompromising Quality</h1>
                    <p className="m-4  text-black"> We don’t settle for less, and neither should you.</p>   
                </div>

                <div className="flex flex-col justify-center items-center box-border border h-[200px] drop-shadow-xl shadow-2xl rounded-xl  bg-white">
                    <h1 className="m-5"> Delivered to Your Doorstep</h1>
                    <p className="m-4  text-black">Enjoy restaurant-quality meals in the comfort of your home.</p>   
                   
                </div>
               
            </div>
           
           
        </section>
       
    )
}
export default About;