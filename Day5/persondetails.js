class PersonDetails {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new PersonDetails('John', 10);
person1.displayDetails();