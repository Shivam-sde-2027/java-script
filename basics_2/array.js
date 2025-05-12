//Array

const arr=[1,2,3,4,5];
console.log(arr,typeof arr);

const arr2=new Array(5,4,3,2,1);
console.log(arr2,typeof arr2);

//Array methods

arr.push(6);
//push insert a val at end
//unshift insert a val in begining 
console.log(arr);

arr2.pop();
//pop remove a val at end
//shift remove a val in begining
console.log(arr2);

console.log(arr,arr2);

console.log(arr.includes(4),arr.includes(7));
console.log(arr.indexOf(4),arr.indexOf(7));

const newArr=arr.join('--');//joing returns string not array
console.log(newArr,typeof newArr);

//slice and splice
//slice doesn't change the original array
//splice changes the original array

console.log("arr before slice",arr);
const sliced=arr.slice(2,4);//starting idx and last idx+1
console.log(sliced);
console.log("arr after slice",arr);

console.log("arr before splice",arr);
const spliced=arr.splice(2,4,'shivam','harsh');//starting idx and length 
console.log(spliced);
console.log("arr after splice",arr);

