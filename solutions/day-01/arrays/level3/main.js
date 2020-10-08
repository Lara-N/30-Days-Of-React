var countries = require('./countries.js');

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
ages.sort();

let minAge = ages[0];
let maxAge = ages[ages.length - 1];

console.log(minAge);
console.log(maxAge);

//Find the median age(one middle item or two middle items divided by two)
let start;
let cant;
let medianAge;

if (ages.length % 2 == 1){
    start = ((ages.length - 1)/2);
    cant = 1;
    medianAge = ages.splice(start, cant);
} else {
    start = ages.length / 2 - 1;
    cant = 2;
    medianAge = ages.splice(start, cant);
    medianAge = medianAge.reduce((a, b) => a + b, 0) / 2;
}

console.log(medianAge);

//Find the average age(all items divided by number of items)
let ave = ages.reduce((a, b) => a + b, 0);
ave = ave / ages.length;
console.log(ave);

//Find the range of the ages(max minus min)
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        if (ages.includes(i))
            ans.push(i);
    }
    return ans;
}
console.log(range(minAge, maxAge));

//Compare the value of (min - average) and (max - average), use abs() method
console.log('min - average: ', Math.abs(minAge - ave));
console.log('max - average: ', Math.abs(maxAge - ave));

//Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

//Find the middle country(ies) in the countries array

function findMiddle(arr){
    let s;
    let c;
    if(arr.length % 2 == 1){
        s = ((arr.length - 1)/2);
        c = 1;
    } else {
        s = arr.length / 2 - 1;
        c = 2;
    }
    console.log(arr.splice(s, c));
}

findMiddle(countries);

//Divide the countries array into two equal arrays if it is even.
//If countries array is not even , one more country for the first half.

let lenArr;

if(countries.length % 2 == 1){
    lenArr = ((countries.length + 1)/2);
} else {
    lenArr = countries.length / 2;
}

let firstArr = countries.slice(0, lenArr);
let secondArr = countries.slice(lenArr, countries.length);

console.log('first array: ', firstArr);
console.log('first array length: ', firstArr.length);
console.log('second array: ', secondArr);
console.log('second array length: ', secondArr.length);