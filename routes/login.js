
const route = require('express').Router();

route.get('/',(req,res,next)=>{
    res.send("Welcome to Market Router");
});

route.post('/' , (req , res , err)=> {

    if(req){
        console.log("Request", req);
    }


})

module.exports = route;