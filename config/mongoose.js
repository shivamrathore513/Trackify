require('dotenv').config();
const mongoose = require('mongoose');

module.exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log(`DATABASE CONNECTED SUCCESFULLY`);
    }).catch((error) =>{
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
};

