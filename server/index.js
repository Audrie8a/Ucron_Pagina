var express = require('express');
const morgan=require('morgan');
const bodyParser = require('body-parser');

var app = express();
const cors = require('cors')
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', function(req,res){
res.send("Bienvenido")
});


app.listen(port, function () {
  console.log('Listening on port',port);
});