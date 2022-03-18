const express=require("express");
const res = require("express/lib/response");
const app=express();
const data=require('./data.json');
let port=process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send(data);
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})