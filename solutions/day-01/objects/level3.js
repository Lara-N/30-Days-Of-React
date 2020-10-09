//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: '',
  lastName: '',
  incomes: {
    income: '',
    description: '',
  },
  expenses:  {
    expense: '',
    description: '',
  },
  totalIncome: function (){},
  totalExpense: function (){},
  accountInfo: function (){},
  addIncome: function (){},
  addExpense: function (){},
  accountBalance: function (){}
}

//console.log(personAccount);

//Imagine you are getting the above users collection from a MongoDB database
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

//Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.

function signUp(newUser){
  let success;

  for(u in users){
    if(newUser.username == users[u].username){
      console.log('sorry :( , username taken');
      break;
    } else if(newUser.email == users[u].email){
      console.log('sorry, email taken');
      break;
    } else {
      users.push(newUser);
      success = 1;
    }
  }
  if(success == 1){
    console.log('user registered');
  }
}

//testing
const user1 = {
  _id: '23twA7',
  username: 'Melissa',
  email: 'meli@thebest.com',
  password: 'aaa*',
  createdAt: '08/05/2020 11:00 PM',
  isLoggedIn: false,
};

const user2 = {
  _id: '23pbA8',
  username: 'Alexandra',
  email: 'alex@alex.com',
  password: '109814',
  createdAt: '08/01/2020 9:00 AM',
  isLoggedIn: false,
};

signUp(user1);
signUp(user2);
console.log('======================');

//Create a function called signIn which allows user to sign in to the application
function signIn(e, p){
  let success;
  for(u in users){
    success = 0;
    let email = users[u].email;
    let pass = users[u].password;

    if(e === email && p === pass){
      console.log(`Welcome! ${users[u].username}`);
      users[u].isLoggedIn = true;
      break;
    } else if(e === email && p !== pass){
      console.log('Password incorrect, try again');
      break;
    } else if (e != email && p != pass){
      success = -1;
    }
  }
  success === -1 ? console.log('email not found') : null;
}

signIn('meli@thebest.com', 'aaa*');
signIn('meli@thebest.com', '3333');
signIn('meli@email.com', '3333');
console.log('======================');

//The products array has three elements and each of them has six properties.
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]


//Create a function called rateProduct which rates the product
let rateArr;

//{ userId: 'fg12cy', rate: 5 },

function rateProduct(productId, givenRate){
  for (p in products){
    rateArr = products[p].ratings;
    if(productId == products[p]._id){
      rateArr.push(givenRate);
    }
  }
}

//testing
let rating1 = { userId: '23twA7', rate: 4 };
let rating2 = { userId: 'fg12cy', rate: 2 };

rateProduct('aegfal', rating1);
rateProduct('aegfal', rating2);
console.log(products);
console.log('======================');

//Create a function called averageRating which calculate the average rating of a product
let productsRated = {};
let rateAvg;

function averageRating(){
  for (p in products){
    rateAvg = 0;
    rateArr = products[p].ratings;
    for(r in rateArr){
      rateAvg = rateAvg + rateArr[r].rate;
    }
    if (rateAvg > 0){
      rateAvg = rateAvg / rateArr.length;
    }    
    console.log(`${products[p].description} has a rating of ${rateAvg}`);
  }
}

averageRating();
console.log('======================');

//Create a function called likeProduct. This function will helps to like to the product
// if it is not liked and remove like if it was liked.

function likeProduct(pId, uId){
  let i;
  for(p in products) {
    if(pId == products[p]._id){
      likesArr = products[p].likes;
      if(likesArr.includes(uId)){
        console.log(`user ${uId} unliked the product ${pId}`);
        i = likesArr.indexOf(uId);
        likesArr.splice(i, i + 1);
        break ;
      } else {
        console.log(`user ${uId} recently LIKED the product ${pId}`);
        likesArr.push(uId);
      }
    }
  }
}

likeProduct('aegfal', 'fg12cy');
likeProduct('aegfal', 'fg12cy');
likeProduct('eedfcf', '23twA7');
likeProduct('eedfcf', '23twA7');
likeProduct('eedfcf', '23twA7');