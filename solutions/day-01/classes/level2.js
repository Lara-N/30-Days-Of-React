//Override the method you create in Animal class
var Animal = require('./level1.js');

class Rabbit extends Animal {
    sayHi(){
        const greeting = `Hello dear rabbit ${this.name}`;
        return greeting;
    }
}

let carrot = new Rabbit('carrot', 0.5, 'black', 4);

console.log(carrot.sayHi());