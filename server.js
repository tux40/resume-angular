const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/myresume'));

app.listen(process.env.PORT || 8005);

//pathLocationStrategy

app.get('/*', function(req, res){
     res.sendFile(path.join(__dirname + '/dist/myresume/index.html')); 
})

console.log('Console listening!');
