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
  