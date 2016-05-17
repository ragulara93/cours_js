
function test() {
  var str = "coucou";
  console.log(str.charAt(0));
  console.log("coucou".charAt(0));
}



/*
Ces 4 déclarations de fonctions sont équivalente et ont la même performance :
- function a() { console.log(i); }
- this.a = function() { console.log(i); }
- a = function() { console.log(i); }
- var a = function() { console.log(i); }
*/
var a = function()
{
  var i = 0;
  i++;
  console.log(i);
}
