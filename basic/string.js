//A man without ego is not a man

const name='Shivam';
let age=21;
console.log(name,'is',age,'years old!');
console.log(`${name} is ${age} years old!`);

const name2=new String('Virat Kohli');
console.log(`${name2} is a cricket player!`);

console.log(name.toUpperCase());
console.log(name.length);
console.log(name[0]);
console.log(name.charAt(0));
console.log(name.indexOf('v'));
console.log(name2.substr(2,6));//starting idx and length
console.log(name.slice(1,6));//starting idx and last idx+1

const str='  India    ';
console.log(str.length);
console.log(str.trim().length);

const url='mailto:john,john.doe@example.com';
console.log(url.replace('john','smith'));
console.log(url.replaceAll('john','warner'));
console.log(url.includes('doe'));

console.log(url.split('.'));//string to array





