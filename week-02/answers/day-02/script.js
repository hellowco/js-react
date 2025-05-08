// Day 2 - Classes & Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  study() {
    console.log(`${this.name} studies ${this.subject}`);
  }
}

const p = new Person("Alice", 30);
p.greet();

const s = new Student("Bob", 20, "Math");
s.greet();
s.study();
