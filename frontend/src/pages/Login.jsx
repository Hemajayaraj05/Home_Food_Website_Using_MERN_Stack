import React, { useState } from "react";
import {Button} from "@blueprintjs/core"


function Login(){
    const [newEmail,setnewEmail]=useState("");
    const [newPass,setnewPass]=useState("");
    const handleSubmit=()=>{

    }

    return(
   
    
    <div className="flex justify-center items-center  box-border border  rounded-md  h-screen">
        
        
           <div className="flex flex-col gap-5 items-center  w-[400px] box-border border-2 border-gray-900 p-8 rounded-2xl  " >
            <h1>LOGIN</h1>
               <input type="text" 
                  value={newEmail}
                  className="flex text-center text-black w-full px-4 py-2 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="UserName/Email"
                  onChange={(e)=>setnewEmail(e.target.value)}/>

               <input type="text"
               value={newPass}
               className="flex text-center w-full px-4 py-2 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
               placeholder="Password"
               onChange={(e)=>setnewPass(e.target.value)}/>

               <p>Create Account ? <a href="#">SignUp</a></p>
               <p><a href="#">Forgot password?</a></p>

               <Button
               onClick={handleSubmit}
               intent="success"
               className="w-20 h-11 button text-black"
               >Submit</Button>
            </div>
            </div>


)}
export default Login;