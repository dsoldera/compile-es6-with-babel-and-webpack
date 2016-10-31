class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return 'Hello I am  ${this.name}';
  }
}

let person = new Person("Danielle");
console.log(person.greet);