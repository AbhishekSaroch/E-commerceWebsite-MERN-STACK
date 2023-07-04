import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/core/Product'

const Cart = ({item}) => {
  const {cart}=useSelector((state)=>state
  )

  
  return (
    <div >
     {
      cart.length > 0 ? (<div  className="grid lg:grid-cols-4 py-5 place-items-center gap-y-5 gap-x-3 items-center justify-center">{
          cart.map((item)=>{
            return (
              <Product item={item} />
            )
          })
        }</div>) : (<div>ghanta ni hai</div>)
     }
    </div>
  )
}

export default Cart