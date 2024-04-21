"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`${this.id}`);
    }
}
let student = new Student("Trang", 1);
student.displayInfo();
