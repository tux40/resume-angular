const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + './app'));

app.listen(process.env.PORT || 8005);

//pathLocationStrategy

app.get('/*', function(req, res){
     res.sendFile(path.join(__dirname + './app/app.component.html')); 
})

console.log('Console listening!');
