(function (){

  var a = 12; // number
  var b = new Number(12);
  console.log(typeof a); // retourne le type de la variable

  var str = "Coucou";
  var str2 = new String("Coucou");

  var c = false;
  var d = new Boolean(false);

  if (c == d) {
    console.log("c et d sont égaux");
  }

  if(!d) //conversion implicite
  {
    console.log("chai pas koi!");
  }



})();
