const express = require('express');
const conn = require("./db");
const app = express();
const cors = require('cors');




conn.connection.on("connected",(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("successfully connected to database");
    }
})
app.use(cors());
app.use(express.json());
app.use('/products',require("./Routes/product"));
app.use('/user',require("./Routes/user"));
app.use('/cart',require("./Routes/cart"));
app.use('/order',require("./Routes/order"));
app.listen(4000 , ()=>{
    console.log("server is conected")
})