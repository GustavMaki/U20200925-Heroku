const { time } = require('console');
var http = require('http');
const { url } = require('inspector');

var server = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.myDateTime = function () {
        return Date();
      };
   
   if(req.url === '/about'){
    res.write('<p>Kul att du vill veta mer om oss, återkom lite senare, vår sida är under uppbyggnad</p>');
    res.write('<a href="/home">Tillbaka</a>');
    res.write('<footer style="position:fixed;bottom:0;"> Status: ' + res.statusCode + ' | Url: ' + req.url + ' | Time: ' + res.myDateTime() + '</footer>');
    res.end();
   }

   else{
    res.write('<p>Välkommen!</p>');
    res.write('Vill du veta mer om oss klicka ');
    res.write('<a href="/about">Här</a>');
    res.write('<footer style="position:fixed;bottom:0;"> Status: ' + res.statusCode + ' | Url: ' + req.url + ' | Time: ' + res.myDateTime() + '</footer>');
    res.end();
   }
 
});

server.listen(8085);

console.log('James Frih');