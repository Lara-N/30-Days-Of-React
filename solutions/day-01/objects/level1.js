//Create an empty object called dog
const dog = {};

//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object.
//The bark property is a method which return woof woof
dog.name = "Canada";
dog.legs = 4;
dog.color = 'gray';
dog.age = 3;
dog.bark = function(){
  return ('woof woof');
}

//Get name, legs, color, age and bark value from the dog object
/* console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
 */

//Set new properties the dog object: breed, getDogInfo
dog.breed = 'Schnauzer';
dog.getDogInfo = function(){
  console.log(dog.name);
  console.log(dog.legs);
  console.log(dog.color);
  console.log(dog.age);
  console.log(dog.bark());
  console.log(dog.breed);
}

dog.getDogInfo();