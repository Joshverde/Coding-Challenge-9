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