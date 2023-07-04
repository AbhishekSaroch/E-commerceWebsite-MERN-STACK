const express=require("express")
const app=express()
const cors=require("cors")
require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(express.json());

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

require("./config/database").connect();

const user=require("./routes/user");

app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`App At ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send(`App at Port ${PORT}`)
})
