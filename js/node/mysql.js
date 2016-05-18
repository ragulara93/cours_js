var mysql = require("mysql");

var connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "node_esgi"
});


connection.connect();

console.log("Connecté à la base !");

//connection.query("create database node_esgi");
/*var str = "CREATE TABLE IF NOT EXISTS `students` (";
str += "`id` int(11) NOT NULL,";
str += "`name` varchar(256) NOT NULL,";
str += "`age` int(11) NOT NULL";
str += ") ENGINE=InnoDB DEFAULT CHARSET=latin1;";
str += "ALTER TABLE `students`";
str += "  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;";
connection.query(str);*/
connection.query("INSERT INTO students (name, age) VALUES ('James', 14)");
connection.query("INSERT INTO students (name, age) VALUES ('Wendy', 16)");
connection.query("INSERT INTO students (name, age) VALUES ('Rocky', 13)");

connection.query("SELECT * FROM students", function(error, rows){

    if (error)
    {
        console.log(error);
        return;
    }

    console.log(rows);

});

connection.end();


