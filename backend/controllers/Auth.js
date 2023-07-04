const User=require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup=async(req,res)=>{
    try {
        const {firstName,lastName,email,password,confirmPassword}=req.body;
      console.log(firstName,lastName,email,password,confirmPassword)
        if(!firstName || !lastName || !email ||!password || !confirmPassword){
          console.log("yhaan fta")
            return res.status(401).json(
              {
                message:"Please Fill All The Details",
                success:false,
            })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
              success: false,
              message:
                "Password and Confirm Password do not match. Please try again.",
            });
          }
          const existingUser=await User.findOne({email})
          if(existingUser){
            return res.status(403).json({
                message:"Already Registered User , Please Login",
                success:false,
            })
          } 
          const hashedPassword = await bcrypt.hash(password,6 );
          const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword, 
  
          });
          return res.status(200).json({
            success: true,
            user,
            message: "User registered successfully",
          });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
              success: false,
              message: "User cannot be registered. Please try again.",
            });
    }
}

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;

   console.log("email---------------->",email,"password--------->",password)
   
    if(!email || !password){
      console.log("yhaan ftaa aakr")
        return res.status(401).json({
            message:"All fields are required please fill .........",
            success:false,
        })
    }
    
    const user=await User.findOne({email})
    if(!user){
        return res.status(401).json({
            message:"Signup First Then Login",
            success:false,
        })
    }
    if(await bcrypt.compare(password,user.password)){
        const payload = {
            email: user.email,
            id: user._id,
          };
          const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "2h",
          });
          user.token = token;
          user.password = undefined;
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          };
          return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged In successfully",
          });
    }else {
        return res.status(401).json({
          success: true,
          message: "Wrong Password",
        });
    } 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error in login"
        })
    }
}
    
