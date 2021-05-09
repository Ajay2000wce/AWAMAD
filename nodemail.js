const nodemailer=require('nodemailer');
const transpoter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'ajaynavgire1805@gmail.com',
        pass:'Indian@rmy1'
    }
});

const mailOptios={
    from:'ajaynavgire1805@gmail.com',
    to:'ajaynavgire2000@gmail.com',
    subject:'Testing nodemailer in Nodejs',
    text:"If you got this message then it working succefully !"
};

transpoter.sendMail(mailOptios,(err,data)=>{
    if(err)
        console.log(`We got an Error: ${err}`);
    else    
        console.log('Email Sent: '+data.response);
});