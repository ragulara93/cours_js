// 1 - charger le fichier data.txt
// lire le contenu

// 2 - afficher tous les utilisateurs dont le prenom commence
// par L

// 3 : crÃ©er un fichier par groupe d'utilisateur
// un groupe d'utilisateur par lettre de l'alphabet
// A.txt -> tous les utilisateurs dont le prÃ©nom commence par A
// B.txt -> tous les utilisateurs dont le prÃ©nom commence par B
// ....

// on a au préalable telecharger fs (npm install fs).
// C'est un package qui permet la gestion et l'utilisation de fichiers
var fs = require('fs');
fs.readFile("data.txt", 'utf8', function(error, data){

    if (error)
    {
        console.log(error);
        return;
    }

    var content = data;

    var users = content.split("\n");

    for (var i = 0; i < users.length; i++ )
    {
        var user = users[i];

        if (user.charAt(0) == "L")
            console.log( user );
    }

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < letters.length; i++)
    {
        var letter = letters[i];


        var str = "";

        for (var j = 0; j < users.length; j++ )
        {
            var user = users[j];

            if (user.charAt(0) == letter)
            {
                str += user + "\n";
            }
        }


        fs.writeFile("dossier/"+letter + ".txt", str, 'utf8', function(error){

        });
    }

});

