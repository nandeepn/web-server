var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
    requiredAuthentication: function (req,res,next) {
        console.log(' Private route hit !');
        next();
    },

    logger: function(req,res,next) {
        console.log('Request: '+ new Date().toString() + ' ' + req.method + '  '+ req.originalUrl);
        next();
    }   
};

app.use(middleware.logger);


app.get('/about',middleware.requiredAuthentication,function(req,res){
res.send('About Us');
});   
/*
Deleting app.get call to '/' (root) restricts 
http://localhost:3000 access
The path now points to file in public folder . 
*/

/*
app.get('/', function (req, res) {
    res.send('Hello Nandeep - Express Site route working');

});
*/

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT);
console.log('Express server started on port '+ PORT);