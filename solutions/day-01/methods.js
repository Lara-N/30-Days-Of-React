const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Print the price of each product using forEach
products.forEach((item) => {
  console.log(item.price);
});


//Print the product items as follows using forEach

/*
The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown.
*/

products.forEach((item) => {
  let priceMsg = `is ${item.price} euros.`;
  if(typeof(item.price) != 'number'){
    priceMsg = 'unknown.';
  }

  console.log(`The price of ${item.product} ${priceMsg}`);
});

//Calculate the sum of all the prices using forEach
let pricesToNum = products.map(prod => {
  if(typeof(prod.price) != 'number')
    return 0;
  else
    return prod.price;
});

let sumPrices = pricesToNum.reduce((acc, cur) => acc + cur);

console.log(sumPrices);

//Create an array of prices using map and store it in a variable prices
let prices = products.map(prod => prod.price);
console.log(prices);

//Filter products with prices
let prodWithPrices = prices.filter((price) => price > 0);
console.log(prodWithPrices);

//Use method chaining to get the sum of the prices(map, filter, reduce)
console.log('done in a previous exercise');


//Calculate the sum of all the prices using reduce only
let sumReduce = prodWithPrices.reduce((acc, cur) => acc + cur);

console.log(sumReduce);


//Find the first product which doesn't have a price value
let firstProductWithNoPrice = products.find((p) => {
  if(typeof(p.price) != 'number') {
    return p;
  }
});

//let firstProductWithNoPrice = prices.find((p) => typeof(p) != 'number');
console.log(`no prices: ${firstProductWithNoPrice.product}`);

//Find the index of the first product which does not have price value
let firstIndextWithNoPrice = products.findIndex((p) => {
  if(typeof(p.price) != 'number') {
    return p;
  }
});

console.log(`first index: ${firstIndextWithNoPrice}`);

//Check if some products do not have a price value
let someWithPrice = products.some((p) => typeof(p.price) == 'number');

console.log(`some items with price: ${someWithPrice}`);


//Check if all the products have price value
let everyWithPrice = products.every((p) => typeof(p.price) == 'number');

console.log(`every item with price: ${everyWithPrice}`);


console.log('\n******explaining methods******');
//Explain the difference between forEach, map, filter and reduce
console.log('.forEach visits EACH element and/or index in the array and applies a function to it, \
but doesn\'t change the original array \
.map visits every element, applies a function and returns a new array. \
.filter helps to filter out the items that mateches a condition given, returns an array. \
.reduce visits every element and applies a function or a sentence, REDUCING them in a new \
value, .reduce can get an initial value as an input (optional) and it returns a new value.');

//Explain the difference between filter, find and findIndex
console.log('.filter will return a new array of the elements that match a condition given \
while .find and .findIndex will return an element and the index of the element respectively.');

//Explain the difference between some and every
console.log('.some visit the elements of an array and returns true as long as SOME OF \
THEM matches with the condition given\n.every visits EVERY elements of an array and returns \
true as long as ALL of them matches with the condition given');