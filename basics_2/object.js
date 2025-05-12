//singleton
//'Object.creare' is singleton

//object literals
const mySymbol=Symbol('key1');//reminder for symbol
const mySymbol2=Symbol('key2');

const jsUser={
    name:"shivam",
    age:21,
    location:"Surat",
    email:"shivampetkar2@gmail.com",
    workingDays:['Mon','Tue','Wed','Fri'],
    mySymbol:"key1",//not correct way
    [mySymbol2]:Symbol("key2")//correct way
}
//behind the scence key is string
console.log(jsUser);
console.log(jsUser.email);//not good approach
console.log(jsUser["email"]);//prefer this
console.log(jsUser["workingDays"][2]);
console.log(typeof jsUser["mySymbol"]);//type is string not symbol
console.log(typeof jsUser[mySymbol2]);//type is symbol

//Object.freeze(jsUser);//changes can't be made after freezing an object in js
jsUser.email="petkarshivam2@gmail.com";
console.log(jsUser);

//====================
jsUser.greeting=function(){
    console.log("Hello js user!");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

//====================
jsUser.greeting2=function(){
    console.log(`Hello js user named ${this.name}!`);
}
console.log(jsUser.greeting2);
console.log(jsUser.greeting2());







