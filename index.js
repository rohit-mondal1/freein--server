const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())



app.get('/' , (req , res)=>{
    res.send('all ok ')
})



app.listen(port ,  ()=>{
    console.log(`freein server port in ${port}`);
})