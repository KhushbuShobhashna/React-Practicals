// 10. The this Keyword

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.introduce();
person2.introduce();

const introduceBound = person1.introduce.bind(person2);
introduceBound();
