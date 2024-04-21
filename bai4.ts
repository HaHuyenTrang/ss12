class Vehicle{
    protected name:string
    protected speed:number
    protected id:number
    constructor( name:string,  speed:number,  id:number){
        this.name = name
        this.speed = speed
        this.id = id
    }
    slowDown(num:number): void{
        this.speed -=num;
        console.log(`${this.speed}`);  
    }
    speedUp(num:number): void{
        this.speed +=num
        console.log(`${this.speed}`);
        
    }
    showspeed():void{
        console.log(`${this.speed}`);
        
    }
}
class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string,  speed:number,  id:number, gear:number){
        super(name,speed,id);
        this.gear = gear
    }
}

let bicycle = new Bicycle("xe đạp",10,10,1)
// tăng
bicycle.speedUp(5);
bicycle.showspeed();
// giảm
bicycle.speedUp(-5);
bicycle.showspeed();