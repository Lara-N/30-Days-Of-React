let yourAge = prompt('Enter your age: ');

if (yourAge >= 18){
    alert('You are old enough to drive');
} else {
    alert(`${18 - yourAge} more years and you\'ll turn 18`);
}

let myAge = 50;

if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else
    console.log(`You are ${myAge - yourAge} years younger than me.`);


let a = 4
let b = 3
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
if(a > b)
    console.log(`${a} is greater than ${b}`);
else
    console.log(`${a} is less than ${b}`);

a > b
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is less than ${b}`);


//check if a number is even or not
let number = prompt('Enter a number: ');

number % 2 == 0
    ? console.log(`${number} is an even number`)
    : console.log(`${number} is an odd number`); 