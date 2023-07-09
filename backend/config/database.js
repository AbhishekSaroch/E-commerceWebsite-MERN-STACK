const mongoose=require("mongoose");

require("dotenv").config();
// connection
exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,({
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })).then((console.log("Connecyion Success")))
    .catch((error)=>{
        console.log("Error in connection")
        console.error(error)
        process.exit(1)
    })
}