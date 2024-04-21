/*
    protected: Khi một thành viên được khai báo là protected, nó có thể được truy cập từ trong
     lớp đó và từ bên trong các lớp con kế thừa từ lớp đó, nhưng không thể truy cập từ bên ngoài
      lớp hoặc từ các đối tượng của lớp đó.
*/ 
class std {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Chirld extends std {
    public speak(): void {
      console.log(`${this.name}`);
    }
  }
  
  const chirld = new Chirld("abc");
  chirld.speak(); 
//   console.log(chirld.name); bên ngoài Chirld kh thể truy cập trực tiếp vào name


/*
  private: Khi một thành viên được khai báo là private, nó chỉ có thể được truy cập
   từ bên trong cùng một lớp, không thể truy cập từ bên trong các lớp con kế thừa hoặc từ bên ngoài lớp.
*/ 

// class Person {
//     private id: number;
  
//     constructor(id: number) {
//       this.id = id;
//     }
  
//     public displayId(): void {
//       console.log(`ID: ${this.id}`);
//     }
//   }
  
//   const person = new Person(12345);
//   person.displayId(); 
// Phương thức displayId() trong cùng lớp có thể truy cập và 
// sử dụng thuộc tính id. Tuy nhiên, từ bên ngoài lớp Person, không thể truy
//  cập trực tiếp vào thuộc tính id.
//   console.log(person.id); 