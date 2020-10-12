//Create an Animal class.
//The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    sayHi(){
        const greeting = `Hello ${this.name}`;
        return greeting;
    }
}

//Test
let canada = new Animal('canada', 3, 'gray', 4);
console.log(canada.sayHi());

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    bark(){
        console.log(`${this.name} says Woof Woof`);
    }
};
class Cat extends Animal{
    meow() {
        console.log(`${this.name} says Meow Meow`);
    }
}

let misifu = new Cat('misifu', 2, 'black', 4);
let cuzco = new Dog('cuzco', 5, 'beige', 4);

misifu.meow();
cuzco.bark();

module.exports = Animal;