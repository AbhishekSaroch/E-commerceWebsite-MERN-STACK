import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/core/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
 const [data,setData]=useState([])
 const[loading,setLoading]=useState(false);
  async function fetchData() {
    setLoading(true)
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response)   
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
        setData([])
      });
      setLoading(false)
  }
  useEffect(() => {
    console.log("exec of useeffetc")
    fetchData();
  }, []);
  return  <div className="w-11/12 mx-auto  mt-3">
    <div className="mx-auto">
  {
  loading ? (<div className="flex justify-center items-center">Data Coming</div>) : 

  data.length>0 ?
  (<div className="grid lg:grid-cols-4 py-5 place-items-center gap-y-5 gap-x-3 items-center justify-center">
   { data.map((item)=>(
      <Product key={item.id} item={item}/>
    ))}
   </div>) :(<div className="flex items-center justify-center">No DATA FOUND</div>)
 }
</div>
</div>

};

export default Home;
