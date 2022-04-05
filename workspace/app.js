const express = require('express');

const app = express();

app.get('/',(req, res)=>{

    console.log("here");
    res.send("I am Respons");

});
 app.get('/add', (req, res)=>{

    console.log("Application");
     let n1=6;
     let n2= 8;
     let sum=n1+n2;
     res.send("sum  = ", sum);//  express deprecated res.send(body, status): Use res.status(status).send(body)
     res.status("sum",sum);
 })

//  express deprecated res.send(body, status): Use res.status(status).send(body)

// var msg =  require('./Message.js');
// console.log(msg);

app.listen(3000);