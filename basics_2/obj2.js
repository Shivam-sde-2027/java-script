//const tinderUser=new Object();

const tinderUser={};
tinderUser.id="123xyz";
tinderUser.name="ABD";
tinderUser.isLoggedIn=false;

const regularUser={
    email:"abd@gmail.com",
    fullName:{
        fname:"Abraham",
        mname:"Benjamin",
        lname:"Devilers"
    }
}

console.log(tinderUser);
console.log(regularUser);
console.log(regularUser["fullName"]["lname"]);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//===============

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"c"};
const obj3={obj1,obj2};
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'c' } }

const ob1={1:"a",2:"b"};
const ob2={3:"c",4:"d"};
const ob3={5:"e",6:"f"};
const ob4=Object.assign(ob1,ob2,ob3);
console.log(ob4);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const o1={1:"a",2:"b"};
const o2={3:"c",4:"d"};
const o3={5:"e",6:"f"};
const o4=Object.assign({},o1,o2,o3);
console.log(o4);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const o3={...o1,...o2}; 90% time use this
// console.log(o3);

//=======================
//array of objects
const obj=[
    {
        id:1,
        name:"Shivam"
    },
    {
        id:2,
        name:"Harsh"
    },
    {
        id:3,
        name:"Mantavy"
    }
];




