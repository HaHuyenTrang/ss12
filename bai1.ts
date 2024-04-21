class Employee{
    public name:string
    protected company:string
    private phone:number
    constructor(  name:string, company:string,phone:number){
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo(): void{
        console.log(`${this.name}`);
        console.log(`${this.company}`);
        console.log(`${this.phone}`);     
    }
}

class Manager extends Employee{
     teamSize: number;
     constructor(name:string, company:string,phone:number,teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
     }
     printInfo(): void {
         super.printInfo();
         console.log(`${this.teamSize}`);
         
     }
}

let Manager1 = new Manager("Trang", "rikkei",19001008,11)
console.log(Manager1.printInfo());
