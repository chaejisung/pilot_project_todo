// server.js

const express = require('express');
const app = express();
const cors = require(cors);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.use(cors({  origin:true  }));
app.listen(8080, function () {
    console.log('listening on 8080')
})

let items=[];
let count = 0;

app.get('/', function(req, res){
    res.send(items);
}); // 조회하는 RESTful API
app.post('/post', function(req, res){
    let item = { id: count , text: req.body};
    count = count + 1;
    
    console.log(item);
    
    if(item != ""){
        items.push(item); 
        console.log("items: ", items);
        res.send(items);
    } else {
        res.status(400);
    }
}); // 할 일을 생성하는 RESTfulAPI
app.put('/put/:id', function(req, res){
    let id = req.params.id;
    console.log(id);
    let iter_ = 0;

    items.forEach((elem, index)=>{
        if(elem.id == id){ 
            items[index].text = req.body.text;
            iter_ = iter_ + 1;
            const bool_ = true;
        }
    });
    if(bool_ == true){
        res.status(400);
    } else {
        res.send(items);
    }
}); // todo에 적힌 내용을 수정하는 RESTfulAPI

app.delete('/item/:id', function(req, res){
    let id = req.params.id;
    console.log(id);
    let count = 0;

    items.forEach((elem, index)=>{
        if(elem.id == id){ 
            items.splice(index, 1);
            count = count + 1;
        }
    });

    if(count == 0){
        res.status(400);
    } else {
        res.send(items);
    }
}); // todo를 삭제하는 RESTfulAPI