let arr=[1,2,3];
let arr2=[4,5,6];

arr.push(arr2);
console.log(arr);//[ 1, 2, 3, [ 4, 5, 6 ] ]

//===========================
let arr3=[1,2,3];
let arr4=[4,5,6];

let arr5=arr3.concat(arr4);//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr5);

//==========================
let arr6=[1,2,3];
let arr7=[4,5,6];

let arr8=[...arr6,...arr7];//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr8);

//==========================
const arr9=[1,2,[3,4,[5,6,[7,8]]]];
console.log(arr9.flat(Infinity));







