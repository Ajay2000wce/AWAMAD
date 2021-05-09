const fs=require("fs");
const http=require("http");
const oper=require("./sample");

const server=http.createServer((req,res)=>{
    fs.readFile('read.txt',(err,data)=>{
        res.writeHead(200,{'Context-type':'text/html'});
        res.write(data);
        res.write(`Addition of 6 and 7:${oper.add(6,7)}   `);
        res.end(`My Name is :${oper.name}`);

    });
    
});
server.listen(3000,()=>{
    console.log("Listening to Port No 3000");
});