import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../../slices/cartSlice";
const Product = ({ item }) => {
  const {cart}=useSelector((state)=>state)
  
  const dispatch = useDispatch();

  const addtocart=()=>{
      dispatch(add(item))
  }
  const removefromcart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-y-5 rounded-md h-[400px] flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center">
        <img src={item.image} alt="main-frame" className=" h-[130px] gap-y-3 object-cover" />
      </div>
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
        <h1 className=" mt-3 text-center text-xl">{item.title}</h1>
      </div>
      <div className="flex gap-x-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full justify-center items-center py-1 ">
        <h1 className="bg-green-300 px-3 py-[2px] cursor-pointer font-semibold rounded-md text-red-600 "><span className="text-white font-medium ">₹</span> {item.price}</h1>
        {cart.some((cheez) => cheez.id === item.id) ? (
          <div className="cursor-pointer">
            <button className="bg-green-300 px-3 py-[2px] font-semibold rounded-md" onClick={removefromcart}>Remove From Cart</button>
          </div>
        ) : (
          <div className="bg-green-300 px-2 py-[2px] font-semibold rounded-md cursor-pointer" onClick={addtocart}>Add</div>
        )}
      </div>
    </div>
  );
};

export default Product;
