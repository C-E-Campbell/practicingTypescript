abstract class Department {
  protected employees: string[] = [];

  constructor(private name: string, protected readonly id: number) {}

  abstract describe(): void;

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

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super('IT', 9);
    this.admins = admins;
  }

  describe() {
    return this.id;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: number, private reports: string[]) {
    super('Accounting', id);
    this.lastReport = reports[0];
  }

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set recentReport(value: string) {}

  addEmployee(name: string) {
    this.employees.push(name);
  }

  getReports() {
    return this.reports;
  }

  describe() {
    return this.id;
  }
}
const employee1 = Department.createEmployee('Max');
const store = new ITDepartment(8, ['Chalrie']);
store.addEmployee('David');

console.log(store.getDepartmentID());
