(function (){
  var arr = [12,true,function(){console.log("here");},"coucou"];
  //arr[2]();

  var arr2 = new Array();
  arr2.push(12);
  arr2.push(13);
  arr2.push(14);

  console.log(arr2);

  // un tableau est un object
  // un object est une sorte de tableau

  //Ceci : var obj = {name:"James", age:14}; est pareil que en bas
  var obj = new Object();
  obj.name = "James";
  obj.age = 14;
  // c possible car les tableaux array sont des objects

})();
