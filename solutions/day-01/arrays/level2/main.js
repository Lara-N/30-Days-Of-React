
var countries = require('./countries.js');
var webTechs = require('./web_techs.js');

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');

console.log(text.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
if(shoppingCart.includes('Meat') == false){
    console.log('There is no Meat, let\'s include it');
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);
if(shoppingCart.includes('Sugar') == false){
    console.log('There is no Sugar, let\'s include it');
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);

let alergic = false;
if (alergic == true){
    console.log('i\'m allergic, let\'s remove Honey');
    for( let i = 0; i < shoppingCart.length; i++){
        if ( shoppingCart[i] === 'Honey') {
            shoppingCart.splice(i, 1);
        }
    }
} else
    console.log('i\'m not allergic, let\'s keep Honey');

console.log(shoppingCart);

console.log('i want GREEN Tea');
let idxTea = shoppingCart.indexOf('Tea');
shoppingCart[idxTea] = 'Green Tea';
console.log(shoppingCart);


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//If it does not exist add to the countries list.
if(countries.includes('Ethiopia') == true){
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

//console.log(countries);

//In the webTechs array check if Sass exists in the array and if it exists print 
//'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass') == true){
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);