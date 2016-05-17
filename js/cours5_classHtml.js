(function(){

  // var user1 = {name:"James", age:13};
  // var user1 = {name:"Wendy", age:14, job:"student"};

  // console.log("Before",this);

  // les classes en JS
  function User(name, age)
  {
    console.log("Here",this); // affiche les valeurs de this qui sont ici : name et age
    this.name = name;
    this.age = age;

    this.bonjour = function(){
      console.log("Bonjour! Je suis "+this.name);
    }

  }

  var user = new User("James",14);
  console.log(user);
  user.bonjour();



  // Cette classe est pareil qu'en haut, définition autre de this.bonjour
  function User(name, age)
  {
    console.log("Here",this); // affiche les valeurs de this qui sont ici : name et age
    this.name = name;
    this.age = age;
  }

  //meme zone mémoire, il va chercher et ajouter cette méthode dans la classe User
  User.prototype.bonjour = function(){
    console.log("Bonjour! Je suis "+this.name);
  }
  user.bonjour();

})();
