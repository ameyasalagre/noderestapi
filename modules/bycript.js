const bcrypt = require('bcrypt');
const saltRounds = 10;




module.exports.encryptText = function(plainText){
    return new Promise(function (resolve, reject){
        bcrypt.hash(plainText, saltRounds).then(function(hash, err) {
            if(hash){
                resolve(hash)
            }else {
                reject(err)
            }
        });
      });
  
} 



module.exports.decryptText = function(plainText , hashedText ){
  return  bcrypt.compare(plainText, hashedText).then(function(res) {
        console.log(res);
        return res ? true : false
    });
}