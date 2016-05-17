(function (){

  //undefine, Nan, Infinity, null

  var a;

  // if(a == undefined) -- pareil que -- if(a)
  if(a == undefined) //est comparable
  {
      console.log("a is undefined");
  }



  var a;
  console.log(typeof(a));
  a++;
  console.log(typeof(a));



  //if(isNan(a)) pareil que if(a = NaN)
  if(isNan(a))
  {
    console.log('is Nan');
  }



  var a = 1/0;
  if (a == Infinity)
  {
    console.log("is Infinity");
  }


  var a = null;
  console.log(typeof(a));
  if (a == null)
  {
    console.log("a est null");
  }


})();
