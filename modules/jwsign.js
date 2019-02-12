var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var cert = 'shhhh';

const options = {
    algorithm: 'RS256'
}

module.exports.encrypt = function(data) {
    console.log(data);

    jwt.sign(data, cert, options, (err, token) => {
        if(err)console.log(" Erroro is here" , err);
        return (token ? token : err);
      });
}
module.exports.log = function (msg) { 
    console.log(msg);
};

module.exports.decrypt =  function(token)  {
    jwt.verify(token, cert, function(err, decoded) {
        console.log(decoded.data) 
      });
}


