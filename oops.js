// oops concept in javascript

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

const person1 = new Person("Alice", 25);
person1.greet();

const person2 = new Person("Bob", 30);
person2.greet();