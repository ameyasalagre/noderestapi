
const route = require('express').Router();

route.get('/',(req,res,next)=>{
    res.send("Welcome to Market Router");
});

route.post('/' , (req , res , err)=> {
    if(req){
        console.log("Username",req.body.username);
        console.log("Password", req.body.password);
        console.log("Access-Control-Request-Headers", req.header("Content-Type"));
        res.send({"usernname":req.body.username ,
        "Password": req.body.password,
        "Access-Control-Request-Headers": req.header("Content-Type")});
    }


})

module.exports = route;