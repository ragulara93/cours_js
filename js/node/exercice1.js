/**
 * Created by Ragu on 17/05/2016.
 */

// Récupérer les parametres fournis par l'utilisateur
//exemple : nodejs script.js James 14 True
//et afficher en retour  : Bonjour James vous avez 14 ans
// Si le dernier parametre est à true
// afficher :  "vous pouvez rentrer"
// sinon, afficher : "vous ne pouvez pas rentrer"


var nom = process.argv[2];
var age = process.argv[3];
var bool = process.argv[4];

console.log("Bonjour "+nom+" vous avez "+age+" ans!");
if (bool == "true")
{
    console.log("Vous pouvez rentrer");
}
else
{
    console.log("Vous ne pouvez pas rentrer");
}
/*
var http = require('http');

var server = http.createServer(onRequest);

server.listen(8000);

function onRequest(req, res)
{
    //console.log(req);
    //console.log("Une requête a été faite");

    res.writeHead(200);
    res.end("voici ma page de base");

}*/

