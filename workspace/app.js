const express = require('express');
const req = require('express/lib/request');

const app = express();

app.get('/',(req, res)=>{

    console.log("here");
    res.send("I am Respons");

});
 app.get('/add', (req, res)=>{

     //console.log("Application");
     let n1=6;
     let n2= 8;
     let sum=n1+n2;
     res.send("sum  = ", sum);//  express deprecated res.send(body, status): Use res.status(status).send(body)
     res.status("sum",sum);
 })


app.post('/add',(req, res)=>{
    
    console.log(req.body);
    // let n1=4;
    // let n2= 9;
    let sum=n1+n2;
    //let sum=0;
     res.send("sum  = ", sum);

})
//  express deprecated res.send(body, status): Use res.status(status).send(body)

// var msg =  require('./Message.js');
// console.log(msg);

app.listen(3000);