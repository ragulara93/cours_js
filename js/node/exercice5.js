/**
 * Created by Ragu on 18/05/2016.
 */

//  crÃ©er une table names
// en se basant sur l'exercice 4,
// Ã  chaque fois qu'un fichier est copiÃ© dans le rÃ©pertoire datas
// il est chargÃ©
// tous les prÃ©noms contenu dans le fichier
// sont ajoutÃ© dans la table names s'il n'y sont pas dÃ©jÃ

var mysql = require("mysql");

var connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "node_esgi"
});


connection.connect();

console.log("Connecté à la base !");

connection.query('CREATE TABLE IF NOT EXISTS names (id int(11), name VARCHAR(100),' +
    'PRIMARY KEY(id))ENGINE=INNODB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;');

var chokidar = require('chokidar');






connection.end();
