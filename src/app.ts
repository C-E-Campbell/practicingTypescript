class Department {
  private employees: string[] = [];

  constructor(private name: string, private readonly id: number) {}

  describe(this: Department) {
    return `Department: ${this.name}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  changeDepartmentName(n: string) {
    this.name = n;
    return this.name;
  }

  getEmployess() {
    return this.employees;
  }
  getDepartmentID() {
    return this.id;
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super('IT', 9);
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super('Accounting', id);
  }

  getReports() {
    return this.reports;
  }
}

const store = new ITDepartment(8, ['Chalrie']);
store.addEmployee('David');

console.log(store.getDepartmentID());
