//Date
let myDate=new Date();
//console.log(myDate,typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

const myDate2=new Date(2023,0,23);//month is printed plus one
console.log(myDate2.toDateString());

const myDate3=new Date('2005-04-07');//yyyy-mm-dd
console.log(myDate3.toDateString());

let myTimeStamp=Date.now();//gives seconds
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long",
});



