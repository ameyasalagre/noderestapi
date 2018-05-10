const route = require('express').Router();

route.get('/',(req,res,next)=>{
    res.send("Welcome to Market Router");
});

module.exports = route;