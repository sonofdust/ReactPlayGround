class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
    PageTransitionEvent;
  }
  getGreeting() {
    //    return "Hello my name is " + this.name;
    return `Hello I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += ` I am visiting from ${this.location}`;
    }
    return greeting;
  }
}

const me = new Traveler("Nicholas", 25, "Utah");
console.log(me);
console.log(me.getGreeting());

const meto = new Traveler();
console.log(meto.getGreeting());
