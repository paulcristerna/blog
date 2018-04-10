/*
 * CoppelApp v1.0.0.
 * Developed by Hipsterna.
 * All rights reserved 2015-2016.
*/

// Get dependenses.

var express = require('express');
var app = express();
var mongojs =  require('mongojs');
var db = mongojs('blog', ['posts']);

// Get posts.

app.use(express.static(__dirname + "/public"));

app.get('/posts', function (req, res)
{
    db.posts.find(function (err, docs) 
    {
        res.json(docs);
    });
});

app.get('/post/:id', function (req, res)
{
	var id = req.params.id;
    db.posts.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    	res.json(doc);
    }) 
});

app.delete('/delete/:id', function (req, res)
{
	var id = req.params.id;
    db.posts.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    	res.json(doc);
    }) 
});

app.listen(3000);

console.log("Server running on port 3000.");