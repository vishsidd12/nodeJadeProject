var exp = require('express');
var app = exp();


var route = require('./routes/route.js');

app.use(exp.static(__dirname+'/public'));


app.set('view engine','jade');

app.get('/',route.home);
app.get('/:city',route.city);

var port = process.env.port || 3000;
app.listen(port);




