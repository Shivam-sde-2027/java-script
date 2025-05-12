let add=(n1,n2)=>{
    console.log(n1+n2);
}
add(1,null);

//==============================

function sub(n1,n2){
    return (n1-n2);
    console.log('after returning');
}
let ans=sub(3,2);
console.log(ans);

//=============================

let loginUserMessage=(username)=>{
    if(!username){
        console.log("Enter user name: ");
        return;
    }
    return `${username} just haved logged in...`;
}
console.log(loginUserMessage());

//==================================
//... is both rest and spread operator


function f1(...num){//array contains [ 1, 2, 3, 4, 5 ]
    return num;
}
console.log(f1(1,2,3,4,5));

function f2(val1,val2,...num){//array contains [ 3, 4, 5 ] val1=1 and val2=2
    return num;
}
console.log(f2(1,2,3,4,5));

//===============================

const user={
    username:"Shivam",
    price:199
}
function handleObject(user){
    console.log(`User name is ${user.username}`);//Shivam
    console.log(`Price is ${user.prices}`);//undefined
}
handleObject(user);
