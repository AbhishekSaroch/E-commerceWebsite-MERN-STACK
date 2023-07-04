import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div className='flex gap-x-5 lg:text-2xl'>
        <NavLink to={"/home"}>
            Home
        </NavLink>
        <NavLink to={"/about-us"}>
            AboutUs
        </NavLink>
    </div>
  )
}

export default Links