const route = require('express').Router();

const decrypt = require('../modules/jwsign').decrypt;

route.get('/',(req,res,next)=>{
    res.send("Welcome to Market Router");
});

route.get('/foods', (req,res,next)=>{
    let token = req.headers.token
    console.log("Data", decrypt(token));

    decrypt(token).then((result,err) =>{
        if(result){
            res.status(200).send(result);
        }
        else{
            res.status(403).send({error: "Forbidden", msg:"Unauthorized Access"})
        }

    }).catch((err)=>{
        res.status(403).send({error: "Forbidden", msg:"Unauthorized Access"})

    })

})

module.exports = route;