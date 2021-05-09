const express=require("express");
const app=express();

//app.get(route,callback);
//get-->read
//put-->update
//post -->create
//delete-->delete
app.get("/",(req,res)=>{
    res.send("This is Home Page")
});


app.get("/Info/about",(req,res)=>{
    res.send("This is about Page");
});

app.get("/*fly",(req,res)=>{
    res.send("This is ...Fly Page");
});

app.get('/Name/:name/PRN/:prn',(req,res)=>{
    res.send(`Information of Student ${req.params}`);
});

app.get("/*",(req,res)=>{
    res.send("This is Error Page");
});

app.listen(3000,()=>{
    console.log("Listening to port no 3000");
});