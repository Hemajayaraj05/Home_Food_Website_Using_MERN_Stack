import React, { useState } from "react";
import {Button,Toaster,Position,Intent} from "@blueprintjs/core"
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
const AppToaster=Toaster.create({
   position:Position.TOP
})

function Login(){
   const navigate=useNavigate();
   
    const [newEmail,setnewEmail]=useState("");
    const [newPass,setnewPass]=useState("");
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
       if(!newEmail || !newPass)
       {
         AppToaster.show({
            message:"Please Fill up All the fields",
            timeout:3000,
            intent:Intent.WARNING
        })
        return;
       }


       const formData = { email: newEmail, password: newPass };
       try{
         const response=await axios.post("http://localhost:3000/api/auth/login",formData,{
            headers:{
               "Content-Type":"application/json"
            }
         });
            if(response.data.usertype==='user')
            {
               AppToaster.show({
                  message: "Login Success!.",
                  timeout: 3000,
                  intent: Intent.SUCCESS,
               })
               navigate('/user/dash')
            }
            else if(response.data.usertype==='cook')
            {
               AppToaster.show({
                  message: "Login Success!.",
                  timeout: 3000,
                  intent: Intent.SUCCESS,
               })
               navigate('/cook/dash')
            }
            else
            {
               AppToaster.show({
                  message: "User type not recognized.",
                  timeout: 3000,
                  intent: Intent.DANGER,
               })
            } 

       }
       catch(err){
         if (err.response && err.response.data && err.response.data.message) {
            AppToaster.show({
              message: err.response.data.message,
              timeout: 3000,
              intent: Intent.DANGER,
            });
         }
            else{
              console.log(err);
              AppToaster.show({
               message: "Internal Server Error. Please try again.",
               timeout: 3000,
               intent: Intent.DANGER,  })
           }
         }
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

               <input type="password"
               value={newPass}
               className="flex text-center w-full px-4 py-2 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
               placeholder="Password"
               onChange={(e)=>setnewPass(e.target.value)}/>

               <p>Create Account ? <Link to="/signup">SignUp</Link></p>
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