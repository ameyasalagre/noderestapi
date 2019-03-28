const route = require('express').Router();
var encode = require('../modules/jwsign');
var encrypt = require('../modules/bycript');
var MongoPool = require('../config/dbconfig');
var genJw = require('../modules/jwsign');


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

                    MongoPool.getInstance(function (db ,err){
                        
                        var dbo = db.db("product");
                        dbo.collection("product_table").insertOne(data, function(err, result) {
                            if (err) throw err;
                            console.log("1 document inserted");
                            console.log("Dataaa",data);
                            db.close();
                            delete data.password;
                            
                            res.status(200).json(genJw.encrypt(data));
                        });
                    });
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
        //encrypt.decrypttext(req.pass, hashed passowrd from database)
       encrypt.decryptText(req.body.password , "$2b$10$nZeOTMwdxvFYN6I4RH43jejkbS2vfhMDfnCXhCBMlBtOOhiuTrZYa").then(function(result){
        console.log("value", result);// result will true false
       })
    }
})

module.exports = route;