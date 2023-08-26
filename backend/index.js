const express=require("express")
const app=express()
const cors=require("cors")
require("dotenv").config();
const PORT=process.env.PORT || 5000;

app.use(express.json());

const allowedOrigins = [
	'http://localhost:3000'
  ];

  app.use(cors({
	origin: function (origin, callback) {
	  if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
		callback(null, true);
	  } else {
		callback(new Error('Not allowed by CORS'));
	  }
	}
  }));

require("./config/database").connect();

const user=require("./routes/user");

app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`App At ${PORT}`)
}) 

app.get("/",(req,res)=>{
    res.send(`App at Port ${PORT}`)
})
