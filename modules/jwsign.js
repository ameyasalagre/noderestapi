let jwt = require('jsonwebtoken');
const fs = require('fs');

var privateKEY  = fs.readFileSync('./private.key', 'utf8');
module.exports.encrypt = function(data) {
    console.log(privateKEY);

     jwt.sign(data, privateKEY, { algorithm: 'HS256'} , (err,token) =>{
        if(err)console.log(" Erroro is here" , err);
        console.log(token);
        return (token ? token : err);
    });

}
module.exports.log = function (msg) { 
    console.log(msg);
};

module.exports.decrypt =  function(token)  {
    console.log("Token is ...." + token);
      
      return new Promise(function (resolve, reject){
        jwt.verify(token, privateKEY, { algorithms: ['HS256'] }, function (err, payload) {
            if(err){
                reject(err)
            }
            else{
                resolve(payload)
            }
          });
      });
}


