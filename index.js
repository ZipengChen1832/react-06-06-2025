class Person {
  constructor(firstName, age, city) {
    this.firstName = firstName;
    this.age = age;
    this.city = city;
  }

  sayHi() {
    console.log("this", this);

    console.log("Hello, my first name is " + this.firstName);
  }
}

const person1 = new Person("Alice", 30, "New York");
const person2 = new Person("Bob", 25, "Los Angeles");

const sayHi = person1.sayHi.bind(person1);
sayHi();
