console.log("hello world");
console.log(process.argv);
console.log(process.argv[2]);

var http = require('http');

var server = http.createServer(onRequest);

server.listen(8000);

function onRequest(req, res)
{
  //console.log(req);
  console.log("Une requête a été faite");

  res.writeHead(200);
  res.end("voici ma page de base");

}
