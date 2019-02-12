const route = require('express').Router();
var encode = require('../modules/jwsign');
var mongoClient = require('../config/dbconfig');
var encrypt = require('../modules/bycript');


route.get('/',(req,res,next)=>{
    res.send("Welcome to Market Router");
});


//Register User
route.post('/register' , (req , res , err)=> {
    if(req){
        
        console.log("Username",  req.body.username);
        console.log("Access-Control-Request-Headers", req.header("Content-Type"));
        let data = {
             
                "username" : req.body.username,
                "password" : req.body.password,
                "email" : req.body.email,
                "gender" : req.body.gender,
                "mobile_no": req.body.mobile_no,
                "city" : req.body.city,
                "state" : req.body.state
            
        }
        encrypt.encryptText(req.body.password).then(function(result, err) {
            if(result){
                data.password = result;
                res.status(200);
                res.send(result);
            }
            if(err){
                res.status(400);
                res.send('None shall pass');
            }
          });

    }
})

route.post('/login' , (req , res , err)=> {
    if(req){
        // load password from db
       encrypt.decryptText(req.body.password , req.body.username).then(function(result){
        console.log("value", result);// result will true false
       })
    }
})

module.exports = route;