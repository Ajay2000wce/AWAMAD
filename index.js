const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("This is Home PAge with no call Back funtion");
});

app.get('/info',(req,res,next)=>{
    
    console.log("About Information");
    next()
    
},(req,res)=>{
    res.send("Contact Information");
});

const a1=(req, res, next)=>{
    console.log("A1");
    next()
};

const a2=(req, res, next)=>{
    console.log("A2");
    next()
};

const a3=(req, res, next)=>{
    res.send("A3");
};

app.get('/Array', [a1,a2,a3])

app.listen(3000, () => {
  console.log('app listening at http://localhost: 3000')
})


