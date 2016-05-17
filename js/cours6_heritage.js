(function (){

  var arr = [12,214,15]; //Array

  // permet d ajouter une nouvelle méthode dans la classe array ou de le supplenter s'il existe
  Array.prototype.somme = function() {
    var _total = 0;

    for (var i = 0; i < this.length; i++) {
      _total += this[i];
    }
    return _total;
  }

  console.log("1", arr.somme());

  // -------------------------------- //

  //on cherche à faire ce qui a cidessous en plus simple
  /*Array.prototype.somme = function() {
  var _total = 0;

  for (var i = 0; i < this.length; i++) {
  _total += this[i];
  }
    return _total * 0.9;
  }*/

  var arr = [12,214,15]; //Array
  var arr2 = [18,17,15]; //Array
  var arr3 = [18,56,15]; //Array

  //proxy
  // on recode la précédent fonction en le modifiant
  (function (){ // pour dire qu'on le fait qu'une fois?!?!
    var proxied = Array.prototype.somme;
    Array.prototype.somme= function() {
    //call ou apply pour lui dire que l'on doit utiliser le this de la fonction sinon il va chercher this dans variable windows qui n'existe pas
    var result = proxied.apply(this);
    return result * 0.9
  };
})();

  console.log("2",arr.somme());
  console.log("2",arr2.somme());
  console.log("2",arr3.somme());

})();
