import { sanitizeWord } from './level2.js';

let month2 = prompt('Enter a month: ');
let monthDays;
month2 = sanitizeWord(month2);


switch(month2){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        monthDays = 'has 31 days';
        break
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        monthDays = 'has 31 days';
        break
    case 'February':
        monthDays = 'has 29 days';
        break
    default:
        monthDays = 'month not found';
        break
}

console.log(`${month2} ${monthDays} in 2020.`);