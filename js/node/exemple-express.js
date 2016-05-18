/**
 * Created by Ragu on 18/05/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname ));


var mysql = require("mysql");
var connection = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : '',
    database : 'esgi',
});
connection.connect();


app.delete("/names", function(req, res){

    connection.query("DELETE FROM students", function(){

        res.json({success:true});
    });

});

app.get("/names", function(req, res){

    var count = req.query.count;
    if (!count)
        count = 2;

    connection.query("SELECT * FROM students LIMIT " + count, function (error, rows)
    {
        if(error){
            console.log(error);
            res.json({error:"Un problÃ¨me est arrivÃ© lors de la connexion"})
            return;
        }

        res.json(rows);
    });

});

// coder un service RestFul complet, Ã  savoir
// - /names/id GET : retourne le nom correspondant Ã  l'ID
// - /names/ POST : ajoute un nouveau nom
// - /names/id DELETE : supprime le nom correspondant Ã  l'ID
// - /names/id PUT : modifie le nom correspondant Ã  l'ID

// indication : app.put("/names/:id", function (....)


console.log("Serveur started on 8000");
app.listen(8000);



