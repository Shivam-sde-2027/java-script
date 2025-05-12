//Primitive//
// BigInt
// Boolean
// Number
// null
// String
// Symbol
// undefined

let BigInt=2e10;
console.log(BigInt);
console.log(typeof BigInt);
console.log(typeof Boolean);
console.log(typeof Number);
console.log(typeof null);
console.log(typeof String);
console.log(typeof Symbol);
console.log(typeof undefined);

const id=Symbol('abd');
const anotherId=Symbol('abd');
console.log(id===anotherId);//false

//=======================================================

//Reference (Non primitive)
//array
//object
//functions

const arr=['shivam',true,123,1.23,null,undefined,['virat','rohit']];
console.log(arr);

const obj={
    name:"Shivam",
    age:24,
    salary:500000,
    dep:{
        dName:'xyz',
        status:'manager'
    },
    org:'Google'
};
console.log(obj);

let greeting=()=>{
    console.log("Hello world!");
}
function greeting2(num){
    console.log("Good morning");
}
greeting();
greeting2(1)