//use modeule exports to expose middleware

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

module.exports = middleware;