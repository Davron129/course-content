abstract class Employee {
    abstract calculateSalary(): number;
}

// interface Employee {
//     calculateSalary(): number;
// }

class ContractEmployee extends Employee {
    name: string = "";
    hourlySalary: number = 0;
    hoursWorked: number = 0;

    
    constructor(name: string, hourlySalary: number, hoursWorked: number) {
        super();
        this.name = name;
        this.hourlySalary = hourlySalary;
        this.hoursWorked = hoursWorked;
    }
    
    calculateSalary(): number {
        return this.hourlySalary * this.hoursWorked;
    }
}

class FullTimeEmployee extends Employee {
    name: string = "";
    hourlySalary: number = 0;
    hoursWorked: number = 8;

    
    constructor(name: string, hourlySalary: number) {
        super();
        this.name = name;
        this.hourlySalary = hourlySalary;
    }
    
    calculateSalary(): number {
        return this.hourlySalary * 8;
    }
}