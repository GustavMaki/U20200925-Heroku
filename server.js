var http = require('http');

var server = http.createServer(function(req,res){
    res.write('Hello from node');
    res.write(req.url);
    res.end();
});

server.listen(8085);

console.log('James Frih');