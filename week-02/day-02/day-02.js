class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

  //function 키워드 없이 사용
	greet() {
		console.log(`Hi, I'm ${this.name}`);
	}
}

const p = new Person('yr', 28);
p.greet();

class Student extends Person {
	constructor(name, age, subject) {
		super(name, age);
		this.subject = subject;
	}

	study() {
		console.log(`${this.name} ${this.age} ${this.subject}`);
	}
}

const s = new Student('Bob', 20, 'Math');
s.study();
