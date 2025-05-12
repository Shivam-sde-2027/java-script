let a=10;//can be modified //simpley use let
var b=10;//can be modified //try not to use var
const c=10;//can't be modified

console.log(a,b,c);
console.table([a,b,c]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


//variables can be declared like this but never prefer
city='Surat';
console.log(city);