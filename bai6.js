"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`${this.name}`);
        console.log(`${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`${this.brand}`);
    }
}
let electronics = new Electronics("T", 199, "yamaha");
console.log(electronics.getDescription());
