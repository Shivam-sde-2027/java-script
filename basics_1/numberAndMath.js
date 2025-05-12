const bal=100;
console.log(bal,typeof bal);

const bal2=new Number(200);
console.log(bal2,typeof bal2);

console.log(typeof bal.toString());

const str=bal.toString();
console.log(str.length);
console.log(bal.length);
console.log(bal.toFixed(3));

const num=23.8966;
console.log(Number(num.toPrecision(4)).toFixed(3),typeof num.toPrecision(4));
//toPrecision function returns a string(1-21)
//toFixed is applied on number after . how many zeros

const hundred=10000000;
console.log(hundred.toLocaleString('en-IN'));

//maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6));//higher/upper bound
console.log(Math.floor(4.6));//lower bound
console.log(Math.max(1,2,3));
console.log(Math.random());//b/w 0-1
console.log(((Math.random()*10)+1).toPrecision(5));
console.log(Math.floor((Math.random()*10)+1));











