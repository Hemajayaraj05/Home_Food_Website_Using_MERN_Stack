import React from "react";
import {Button} from '@blueprintjs/core'
import {useNavigate} from 'react-router-dom'

function Content(){
    const navigate=useNavigate();
    const handleCook=()=>{
            navigate('/login')    
    }
    const handleUser=()=>{
            navigate('/login')
    }
   

    return (
    <div className="flex  h-[70%] w-full  bg-black/20">
    
    <div className="flex justify-between h-[70%] w-1/2 ">
        

         <img  className="absolute inset-0 -z-10 h-full w-full backdrop-blur-sm" src="/bghome.jpg" alt="img"/>
        
            <div className="flex flex-col gap-5 p-8 h-[680px] text-black font-medium text-2xl leading-10  items-center justify-center ">
               
                <div className="  home-font text-white text-pretty leading-snug pl-5 pr-5">
                    <h1>Where every meal feels like home, made with love and served with care</h1>
                </div>


                <div className="flex box-border gap-6 justify-center items-center  w-full">
                    <Button 
                        onClick={handleCook}
                        className="w-50 h-11 button text-white">Prepare with Love</Button>

                    <Button
                        onClick={handleUser}
                        className="w-50 h-11 button text-white">Taste the Magic </Button>
                </div>
                

            </div>   
          </div>
          </div>

)}
export default Content;