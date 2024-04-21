class Employee1{
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

class Manager3 extends Employee1{
     teamSize: number;
     constructor(name:string, company:string,phone:number,teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
     }
    printInfo(): string {
         super.printInfo();
         console.log(`${this.teamSize}`);
         return `${this.name} làm ở ${this.company} `
     }
}

let manage = new Manager3("Trang", "rikkei",19001008,11)
manage.printInfo();

