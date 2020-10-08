
//Declare an empty array
const emptyArr = [];

//Declare an array with more than 5 number of elements
const cacklesStudents = ['Mildred', 'Maud', 'Enid', 'Ethel', 'Sybil', 'Clarice'];
//Find the length of your array
console.log('Number of cacklesStudents:', cacklesStudents.length);

//Get the first item, the middle item and the last item of the array
let middleIndex = ((cacklesStudents.length - 1)/2).toFixed(0);
let lastIndex = cacklesStudents.length - 1;

console.log('cacklesStudents[]:', cacklesStudents);
console.log('First item:', cacklesStudents[0]);
console.log('Middle item:', cacklesStudents[middleIndex]);
console.log('Last item:', cacklesStudents[lastIndex]);

/*
 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
 The array size should be greater than 5
*/
let mixedDataTypes = ['Sublime', 'Coffee', 23, 3.14, '*'];

console.log('mixedDataTypes[]: ', mixedDataTypes);
console.log('Number of mixedDataTypes: ', mixedDataTypes.length);

/*
 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM,
 Oracle and Amazon
 Print the array using console.log()
 Print the number of companies in the array
 Print the first company, middle and last company
 Print out each company
*/
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let lenCompanies = itCompanies.length;
let middleIxCompanies = ((lenCompanies - 1)/2).toFixed(0);
let lastIxCompanies = lenCompanies - 1;

console.log('itCompanies[]: ', itCompanies);
console.log('Number of itCompanies: ', lenCompanies);
console.log('First company: ', itCompanies[0]);
console.log('Middle company: ', itCompanies[middleIxCompanies]);
console.log('Last company: ', itCompanies[lastIxCompanies]);

//Change each company name to uppercase one by one and print them out
console.log('** changing to upper case **');
itCompanies.forEach(company => console.log(company.toUpperCase()));

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
//IBM,Oracle and Amazon are big IT companies.
console.log('** printing like a sentence **');
let strCompanies = itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies.slice(-1);
console.log(strCompanies + ' are big IT companies.');

//Check if a certain company exists in the itCompanies array.
//If it exist return the company else return a company is not found
console.log('** checking if a company exists **');

function findCompany(comp){
    let ret = strCompanies.includes(comp);
    
    if (ret == false){
        ret = 'company is not found';
    } else {
        ret = comp;
    }
        
    return ret;
}

console.log('Find Facebook: ', findCompany('Facebook'));
console.log('Find Twitter: ', findCompany('Twitter'));

//Filter out companies which have more than one 'o' without the filter method
console.log('** Filter out without filert() **');
console.log('itCompanies: ', itCompanies); 

function moreOs(comp){
    let count;
    
    count = (comp.match(/o/g) || []).length;
    if(count >= 2){
        comp = '';
    }
    return comp;
}

let filterOut = [];

itCompanies.forEach(c => {
    c = moreOs(c);
    if (c != ''){
        filterOut.push(c);
    }    
});
console.log('filterOut: ', filterOut);

//Sort the array using sort() method
console.log('** sort **');
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log('** reverse **');
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
console.log('** Slice out the first 3 **');
console.log(itCompanies.slice(0, 3));

//Slice out the last 3 companies from the array
console.log('** Slice out the last 3 **');
console.log(itCompanies.slice(lenCompanies - 3, lenCompanies));

//Slice out the middle IT company or companies from the array
console.log('** Slice out the middle **');
let start;
let end;

console.log(itCompanies.length);
if (itCompanies.length % 2 == 1){
    start = ((itCompanies.length - 1)/2); //3
    end = start + 1;
} else {
    start = itCompanies.length / 2 - 1;
    end = start + 2;
}
console.log(itCompanies.slice(start , end));

console.log('** itCompanies before removing **');
console.log(itCompanies);
//Remove the first IT company from the array
console.log('** Remove the first **');
itCompanies.shift();
console.log('itCompanies :', itCompanies);

//Remove the middle IT company or companies from the array
console.log('** Remove the middle **');
let cant;

if (itCompanies.length % 2 == 1){
    start = ((itCompanies.length - 1)/2); //3
    cant = 1;
} else {
    start = itCompanies.length / 2 - 1;
    cant = 2;
}

itCompanies.splice(start, cant);
console.log('itCompanies :', itCompanies);

//Remove the last IT company from the array
console.log('** Remove the last **');
itCompanies.pop();
console.log('itCompanies :', itCompanies);

//Remove all IT companies
console.log('** Remove all **');
itCompanies.splice(0, itCompanies.length);
console.log('itCompanies :', itCompanies);