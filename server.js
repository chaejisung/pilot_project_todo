// server.js

const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', './static');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, function () {
    console.log('listening on 8080')
})

app.get('/', function(req, res){
    res.render('index.ejs', {items:items});
})

let items=[];

app.post('/post', function(req, res){
    let item = req.body.text;
    console.log(item);
    if(item != ""){items.push(item);}
    console.log("items", items);

    res.render('index.ejs', {items: items});
    
});