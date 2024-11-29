import React, { useState } from "react";
import axios from 'axios'
import { Button,Toaster,Position,Intent} from "@blueprintjs/core";
import {useNavigate} from 'react-router-dom'
import {Link} from "react-router-dom"
const AppToaster=Toaster.create({
    position:Position.TOP,
})

function SignUp(){
   
    const navigate=useNavigate();

    const [userName,setuserName]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [userpass,setuserPass]=useState("");
    const [usertype,setUsertype]=useState("");

    const handleSubmit=async()=>{
         if(!userName || !userEmail ||!userpass ||!usertype)
         {
            AppToaster.show({
                message:"Please Fill up All the fields",
                timeout:3000,
                intent:Intent.WARNING
            })
         }
         try{
            const response=await axios.post("http://localhost:3000/api/auth/signup",{
                name:userName,
                email:userEmail,
                password:userpass,
                usertype:usertype

            });
             console.log(response)
            AppToaster.show({
                message:"Registration Success!",
                intent:Intent.SUCCESS
            })
            navigate('/login');

         }
         catch(err){
            console.log(err)
            AppToaster.show({
                message:"Registration Failed",
                intent:Intent.DANGER
            })
         }
          
          
    }

    return (
        <div className="flex justify-center items-center text-black h-screen ">
            <div className="flex flex-col  items-center gap-5 border-box border-2 border-gray-900 w-[400px] rounded-2xl p-5">
                <h1>SIGNUP</h1>
                
                <input type="text"
                value={userName}
                className="flex text-center px-4 py-2 w-full border-box border border-gray-900  rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="UserName"
                onChange={(e)=>setuserName(e.target.value)}/>

                <input type="text"
                value={userEmail}
                 className="flex text-center px-4 py-2 w-full border-box border border-gray-900  rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="UserEmail"
                onChange={(e)=>setUserEmail(e.target.value)}/>
                
                <input type="text"
                value={userpass}
                 className="flex text-center px-4 py-2 w-full border-box border border-gray-900  rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 "
                placeholder="Password"
                onChange={(e)=>setuserPass(e.target.value)}/>
                
                <div className="flex flex-row gap-5 ">
                {["cook","user"].map((option)=><label className="flex flex-row gap-2" key={option}>
                <input type="radio"
                value={option}
                checked={usertype===option}
                onChange={(e)=>setUsertype(e.target.value)}/>
                {option}
                </label>
                )}  
                </div> 

                <p>Already have an Account? <Link to ="/login">Login</Link></p>

              <Button
               onClick={handleSubmit}
               intent="success"
               className="w-20 h-11 button text-black"
               >SignUp</Button>

            </div>
        </div>

    );

}
export default SignUp;