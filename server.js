// server.js

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.listen(8080, function () {
    console.log('listening on 8080')
})

let items=[];

app.get('/', function(req, res){
    res.send(items);
});
app.post('/post', function(req, res){
    let item = req.body;
    console.log(item.id);
    console.log(item.text);
    
    if(item != ""){ items.push(item); }
    console.log("items: ", items);

    res.send(items);
    
});
app.delete('/item/:id', function(req, res){
    let id = req.params.id;
    console.log(id);

    items.forEach((elem, index)=>{
        if(elem.id == id){ items.splice(index, 1); }
    });
    console.log(items);

    res.send(items);
});