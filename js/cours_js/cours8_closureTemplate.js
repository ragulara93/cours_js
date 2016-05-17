(function(){

  function create ()
  {
    var counter = 12;

    return {
      print : function(){console.log(counter);},
      incr : function(){counter++;},
      decr : function(){counter--;}
    }
  }

  var a = create();
  a.incr();
  a.incr();
  a.incr();
  a.print();
  a.decr();
  a.print();



})();
