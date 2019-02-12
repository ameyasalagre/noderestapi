'use strict';

const express = require('express');
const router = express.Router(); 
var ip = require("ip");

// connect to mongodb
var MongoPool = require('../config/dbconfig');


//**** READ OPERATION**/
//**** FIND OBJECT IN COLLECTION*/
// method for getting data using post method on url : http://localhost:3000/products/find
router.post('/find', function (req, res) {
    var id = req.body.product_name;

    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("product");
        var query = { product_name:  req.body.product_name };
        dbo.collection("product_table").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
        db.close();
        });
      });    
  });

//**** WRITE OPERATION**/
//**** INSERT OBJECT IN COLLECTION*/
// method for posting data on url : http://localhost:3000/products/insert
router.post('/insert',(req, res) => {
    MongoPool.getInstance(function (db){
        var dbo = db.db("product");
        var query = { product_id: req.body.product_id,
                      product_name: req.body.product_name,           
                      product_weight: req.body.product_weight,
                      ip: ip.address()
                    };
        dbo.collection("product_table").insertOne(query, function(err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            res.status(200).json(query);
          });
    });

});

//**** READ ALL OPERATION**/
//**** READ ALL OBJECTs IN COLLECTION*/
// method for posting data on url : http://localhost:3000/products/findall
router.get('/findall',function(req,res){

        MongoClient.connect(uri,function(err,db){

            var dbo = db.db('product');
            dbo.collection("product_table").find({}).toArray(function(err,result){
                if(err) throw err;
                res.status(200).json(result);
                db.close();
            });
        });
});

//**** DELETE OPERATION**/
//**** DELETE OBJECTs IN COLLECTION*/
// method for posting data on url : http://localhost:3000/products/delete
router.delete('/delete',function(req,res){

    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("product");
        var myquery = { product_name: req.body.product_name };
        dbo.collection("product_table").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });
});

module.exports = router;