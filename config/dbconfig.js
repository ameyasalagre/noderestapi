var MongoClient = require('mongodb').MongoClient;
var url = require('./config').mongodbUrl;

var option = {
     numberOfRetries : 5, 
     auto_reconnect: true, 
     poolSize : 40, 
     connectTimeoutMS: 30000 , 
     useNewUrlParser: true 
};

function MongoPool() {}

var p_db;

function initPool(cb) {
    MongoClient.connect(url, option, function (err, db) {
        if (err) throw err;
        console.log(err);
        p_db = db;
        if (cb && typeof (cb) == 'function')
            cb(p_db);
    });
    return MongoPool;
}

MongoPool.initPool = initPool;

function getInstance(cb) {
    if (!p_db) {
        console.log("Here");

        initPool(cb)
    } else {
        if (cb && typeof (cb) == 'function')
            cb(p_db);
    }
}

MongoPool.getInstance = getInstance;

module.exports = MongoPool;