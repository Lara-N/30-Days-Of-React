let score = prompt('Enter your grade: ');
let grade;

if(score >= 90 && score <= 100)
    grade = 'A+';
else if (score >= 70 && score < 90)
    grade = 'B';
else if (score >= 60 && score < 70)
    grade = 'C';
else if (score >= 50 && score < 60)
    grade = 'D';
else if (score >= 0 && score < 50)
    grade = 'F';
else
    grade = 'score not matching';
console.log(grade);

//Check if the season is Autumn, Winter, Spring or Summer. 
let month = prompt('Which month?');
let season;

switch(month){
    case 'September':
    case 'October':
    case 'November':
        season = 'Autumn';
        break
    case 'December':
    case 'January':
    case 'February':
        season = 'Winter';
        break
    case 'March':
    case 'April':
    case 'May':
        season = 'Spring';
        break
    case 'June':
    case 'July':
    case 'August':
        season = 'Summer';
        break
    default:
        grade = '404 season not found';
}


console.log(`The season is ${season}`);

let day = prompt('What is the day today?');
let dayMsg;

export function sanitizeWord(w){
    w = w.toLowerCase();
    w = w[0].toUpperCase() + w.slice(1);
    return w;
}

day = sanitizeWord(day);

switch(day){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        dayMsg = 'is a working day.';
        break
    case 'Saturday':
    case 'Sunday':
        dayMsg = 'is a weekend.';
        break
    default:
        dayMsg = 'day not found [404]';
}

console.log(`${day} ${dayMsg}`);