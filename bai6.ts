class Product{
    protected name:string
    protected price:number
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getDescription(): void{
        console.log(`${this.name}`)
        console.log(`${this.price}`)  
    }
}

class Electronics extends Product{
    private brand:string
    constructor(name:string, price:number,brand:string){
        super(name,price)
        this.brand = brand
    }
    getDescription(): void{
        super.getDescription()
        console.log(`${this.brand}`);
        
    }
}
let electronics = new Electronics("T", 199,"yamaha")
console.log(electronics.getDescription());
