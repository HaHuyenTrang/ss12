"use strict";
class Employee {
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
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`${this.teamSize}`);
    }
}
let Manager1 = new Manager("Trang", "rikkei", 19001008, 11);
console.log(Manager1.printInfo());
