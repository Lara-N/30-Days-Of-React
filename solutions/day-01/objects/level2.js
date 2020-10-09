let countriesData = require('./countries');

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//Find the person who has many skills in the users object.
let max = 0;
let userMaxSkills;

for(let user in users){
    let userSkills = users[user].skills;
    let cantArr = userSkills.length;

    if (cantArr > max){
        max = cantArr;
        userMaxSkills = user;
    }
}

console.log(`${userMaxSkills} has ${max}, being the most skilled`);

//Count logged in users
let loggedCount = 0;

for(let user in users){
    let logged = users[user].isLoggedIn;

    if (logged)
        loggedCount++;
}

console.log(`${loggedCount} users are logged in.`);


//Count users having greater than equal to 50 points
let fiftyPointsCount = 0;

for(let user in users){
    let points = users[user].points;

    if (points >= 50)
        fiftyPointsCount++;
}

console.log(`${fiftyPointsCount} users have >= 50 points.`);


//Find people who are MERN stack developer from the users object
// MERN: 'MongoDB', 'Express', 'React', 'Node'
let mernCount = 0;

console.log('MERN');
for(let user in users){
  let userSkills = users[user].skills;
  for(let skill in userSkills){
    switch(userSkills[skill]){
      case 'MongoDB':
      case 'Express':
      case 'React':
      case 'Node':
        mernCount++;
        break
    }
  }
  if (mernCount == 4){
    console.log(`${user} is a MERN stack developer <3`);
  }
  mernCount = 0;
}

//Set your name in the users object without modifying the original users object

users['Melissa'] = {
    email: 'melissathegreatest@2020.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 29,
    isLoggedIn: true,
    points: 1000
  };
console.log('user \'Melissa\' added');

//Get all keys or properties of users object
const userKeys = Object.keys(users);
console.log(userKeys);

//Get all the values of users object
const userValues = Object.values(users);
console.log(userValues);


//Use the countries object to print a country name, capital,
//populations and languages.

for(country in countriesData){
  let c = countriesData[country];
  console.log(`${c.name} whose capital is ${c.capital}, has a population of ${c.population} and the languages spoken are: ${c.languages}`);
}