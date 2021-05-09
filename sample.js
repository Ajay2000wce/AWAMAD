const add= (a,b)=>{ return a+b;}
const sub=(a,b)=>{ return a-b;}
const mul=(a,b)=>{return a*b;}
const div=(a,b)=>{return a/b;}

const name="Ajay Navgire";

// module.exports.myadd=add;//  only exports add funtion

module.exports={add,sub,mul,div,name};  //export  multiple values
