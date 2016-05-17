// Concept du this
console.log(this);

/*
Ces 4 déclarations sont équivalente et ont la même performance :
- window.a = 12
- this.a = 12
- a = 12
- var a = 12
*/


//neutralisation de lespace global
//c pour éviter d'écraser une propriété de window
(function (){
 //code
})();
