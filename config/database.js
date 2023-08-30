const mongoose = require("mongoose");

require('dotenv').config();

exports.DBconnect = ()=>{
     mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser :true,
        useUnifiedTopology:true,
     })
     .then(()=>console.log("DB connection is successfully"))
     .catch( (error)=>{
            console.log("issue in DB connection");
            console.log(error);
            process.exit(1);
     }); 
}