import Human from "./Human";

class Employee extends Human {
    salary;
    department;

    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = parseInt(salary, 10);
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + ", " + this.salary + ", " + this.department;
    }
}

export default Employee;