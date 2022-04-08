
const express = require('express');
const userRouter = require('/routers/user.js');


const app = express();

app.use(express.json());

app.use('/,', (req, res)=>{
    res.setEncoding("it working");
})

app.use('/user',userRouter);

app.listen(3000);