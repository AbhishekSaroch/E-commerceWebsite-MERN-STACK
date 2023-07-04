import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/operation/authAPI";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleonchange = (e) => {
    // update the form data
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("email->", email);
  console.log("password->", password);

  const handleonsubmit = (e) => {
    e.preventDefault();
    console.log("yhaan par fatega kutton ki trh");
    dispatch(login(email, password, navigate));
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <form
      onSubmit={handleonsubmit}
      className="h-[70vh] flex flex-col  justify-center items-center"
    >
      <h1 className='text-2xl text-white  font-medium bg-green-400 rounded-md px-5 py-1 text-center'>Welcome Back</h1>
      <label>E-Mail</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleonchange}
        className="border-2 w-[300px] px-5"
      />

      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={handleonchange}
        name="password"
        className="border-2 w-[300px] px-5"
      />
      <button
        className="bg-yellow-300 flex justify-center items-center mx-auto mt-5 px-5 py-1 rounded-sm font-semibold "
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
