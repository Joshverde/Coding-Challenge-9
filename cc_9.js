// Task 1 - Created Employee Class
class Employee { // declares Employee class
    constructor(name, id, department, salary) { // creates object with specified properties 
      this.name = name; // assigns name 
      this.id = id; // assigns id 
      this.department = department; // assigns department
      this.salary = salary; // assigns salary
    }
  
    getDetails() { // delcares the method
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`; // returns a string of employee details  
    }
  
    calculateAnnualSalary() { //decalres the method 
      return this.salary * 12; //  calculates and returns annual salary 
    }
  }
  console.log("Task 1") // for console readability
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // new employee
  console.log(emp1.getDetails()); // calla and logs employee details method
  console.log(emp1.calculateAnnualSalary()); // calls and logs the annual salary method
  
// Task 2 - Created Manager Class with Inheritance
class Manager extends Employee { //extends manager class from employee class
    constructor(name, id, department, salary, teamSize) { // creates object with specified properties
      super(name, id, department, salary); // inhereted from parent class
      this.teamSize = teamSize;  // assigns team size
    }
  
    getDetails() { //declares the method
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`; // returns a string of manager details
    }
  
    calculateBonus() { //declares the method
      const bonus = 0.1; // creates bonus 
      const baseSalary = this.salary * 12;  // MIGHT NEED TO BE CHANGED 
      return bonus * baseSalary; // returns calculated bonus based of annual salary 
    }
    calculateAnnualSalary() { //decalres the method
      return (this.salary * 12) + this.calculateBonus(); // caclualtes the managers annual salary with bonus
     } 
  }
  console.log("Task 2") // for console readability
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
  console.log(mgr1.getDetails()); // calls and logs method
  console.log(mgr1.calculateBonus()); //calls and logd method

// Task 3 and 4 - Created Company Class
class Company { // declares Company class
    constructor(name) { // creates constrcutor with proeprties 
      this.name = name; // assigns name
      this.employees = [];  //creates empty list
    }
  
    addEmployee(employee) { // declares method
      this.employees.push(employee); //adds employee to empty list 
    }
  
    listEmployees() { // declares method 
      this.employees.forEach((employee) => { //uses forEach to log each empoyees details by calling getDetails
        console.log(employee.getDetails()); 
      });
    }
  
    calculateTotalPayroll() { // declares the method
      let total = 0; // sets total to 0
      this.employees.forEach((employee) => { // uses for Each to add total to each Empolyees annual salary
        total += employee.calculateAnnualSalary();
      });
      return total;
    }
}
//Task 3
console.log("Task 3") // for console readability
const company = new Company("TechCorp"); // creates a new company 
company.addEmployee(emp1); //calls and logs method
company.addEmployee(mgr1); //calls and logs method
company.listEmployees(); //calls and logs method
// Task 4
console.log("task 4"); // for console readability
console.log(company.calculateTotalPayroll());