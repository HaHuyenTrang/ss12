"use strict";
class Employee1 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`${this.name}`);
        console.log(`${this.company}`);
        console.log(`${this.phone}`);
    }
}
class Manager3 extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`${this.teamSize}`);
        return `${this.name} làm ở ${this.company} `;
    }
}
let manage = new Manager3("Trang", "rikkei", 19001008, 11);
manage.printInfo();
