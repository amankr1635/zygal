import React, {useEffect, useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios"
import Swal from 'sweetalert2';


export default function LogIn() {

  const Navigate= useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
const token = localStorage.getItem("token");

useEffect(()=>{
  if(token){
    Swal.fire({
      title: 'User Already logged in',
      icon: 'error',
      confirmButtonColor: '#ad104a',
    });
    Navigate("/")
    return;
  }
},[token])


  const LoginFunction= async function(){
      await axios.post(`http://localhost:3001/logIn`,{
      email,
      password,
  })
  .then((res)=>{
    console.log(res.data)
  localStorage.setItem("token", (res.data.data.token))
  Swal.fire({
    title: 'LogIn SucessFull',
    icon: 'success',
    confirmButtonColor: '#ad104a',
  });
  Navigate("/")
  })
.catch((err)=>{
  Swal.fire({
    title: err.response.data.message,
    icon: 'error',
    confirmButtonColor: '#ad104a',
  });
})
}

  return (
    <div className='LogIn'>
        <div>
            <div className='logInForm'>
            <div>
            <input type = "email" name= "email" id="email" value={email} placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
            <input type = "password" name= "password" id="password"value={password} placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <input
             type= "submit"  id = "logIn" value ="Sign In" onClick={LoginFunction}/>
        
            </div>
            <div className='loginForm2'>
                {/* <Link to = "/signUp"><span  style={{color :"blue",cur:"pointer"}}>Sign Up</span> </Link> */}
             </div>
        </div>
      
    </div>
  )
}