"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(num) {
        this.speed -= num;
        console.log(`${this.speed}`);
    }
    speedUp(num) {
        this.speed += num;
        console.log(`${this.speed}`);
    }
    showspeed() {
        console.log(`${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("xe đạp", 10, 10, 1);
// tăng
bicycle.speedUp(5);
bicycle.showspeed();
// giảm
bicycle.speedUp(-5);
bicycle.showspeed();
