import React from 'react'
import { useState } from 'react';
import { signup } from '../services/operation/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
      });
    const {firstName,lastName,email,password,confirmPassword}=formData

      const handleonchange = (e) => {
    
        // update the form data
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));

      };
    //   console.log("firstName mera ye hai->",firstName)
    //   console.log("lastName mera ye hai->",lastName)
    //   console.log("password mera ye hai->",password)
    //   console.log("Email mera ye hai->",email)
    //   console.log("confirmPassword mera ye hai->",confirmPassword)
    const handleonsubmit=(e)=>{
        e.preventDefault()
        dispatch(signup(firstName,lastName,email,password,confirmPassword,navigate))
       }
     
  return (
    <div className='h-full mx-auto ' >
        {/* <div className='w-11/12 flex flex-col justify-center items-center mt-10 gap-y-5'> */}
            <form onSubmit={handleonsubmit} className='h-[70vh] w-full flex flex-col justify-center items-center mt-10 gap-y-5 '>
            <h1 className='text-2xl text-white  font-medium bg-green-400 rounded-md px-5 py-1 text-center'>Hii Thankyou for showing Interset</h1>
            {/* name dave */}
            <div className='lg:flex gap-x-4 sm:gap-y-3'>
            <label>First Name</label>
                {/* first name div */}
                <div>
                    <input type='text'
                    className='border px-2'
                    name='firstName'
                    value={firstName}
                    onChange={handleonchange}
                    placeholder='Enter Your First Name'
                    />
                </div >
                 {/* first name div */}
                 <label>Last Name</label>
                <div>
                    <input type='text'
                    className='border px-2'
                    onChange={handleonchange}
                    name='lastName'
                    value={lastName}
                    placeholder='Enter Your Last Name'
                    />
                </div>
            </div>
            <div className=' flex  gap-x-4'> 
               
                <label>Enter Your Email</label>
                <input type='text' className=' px-2 border' 
                name='email'
                value={email}
                onChange={handleonchange}
                placeholder='Enter Your Email'
                />
            </div>
            <div className=' flex gap-x-4'> 
                <label>Password</label>
                <input type='text' className='border px-2' 
                name='password'
                value={password}
                onChange={handleonchange}
                placeholder='Enter Your Email'
                />
            </div>
            <div className=' flex gap-x-4'> 
                <label>Confirm Password</label>
                <input type='text' className='border px-2' 
                name='confirmPassword'
                onChange={handleonchange}
                value={confirmPassword}
                placeholder='Enter Tour Email'
                />
            </div>
            <button className='bg-yellow-300 flex justify-center items-center mx-auto mt-5 px-5 py-1 rounded-sm font-semibold '
            type='submit'>
                SignUp
           </button>
           </form>
        </div>
    // </div>
  )
}

export default Login