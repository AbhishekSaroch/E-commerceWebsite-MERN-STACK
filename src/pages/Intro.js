import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Intro = () => {

  return (

    <div className=' h-[100vh] w-11/12 flex flex-row justify-center items-center  mx-auto'>
        <div className='flex  flex-col gap-y-5'>
            <h1 className='text-2xl text-white  font-medium bg-green-400 rounded-md px-5 py-1 text-center'>Please Login Here To see The Data</h1>
            <div className='border  w-full flex flex-col gap-y-3 p-5'>
                <h1 className='text-center text-xl '>New User Then Register Here </h1>
                <div className='text-center' >
                <Link to={"/signup"}  >
                    <span className='text-center  text-white  font-medium bg-green-400 px-3 py-1 text-xl rounded-md'>Register Here </span>               
                </Link>
                </div>
            </div>
            <div className='border  p-5 w-full flex flex-col gap-y-3'>
                <h1 className='text-center text-xl '>Already Registered , Then Please SignUp Here</h1>
                <div className='text-center' >
                <Link to={"/login"}>
                    <span  className='text-center bg-green-400 px-3 py-1 text-xl  text-white  font-medium rounded-md'>
                    Login Here  
                    </span>              
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro