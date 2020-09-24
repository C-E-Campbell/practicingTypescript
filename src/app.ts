class Department {
  private employees: string[] = [];

  constructor(private n: string, private readonly id: number) {}

  describe(this: Department) {
    return `Department: ${this.n}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  changeDepartmentName(n: string) {
    this.n = n;
    return this.n;
  }

  getEmployess() {
    return this.employees;
  }
  getDepartmentID() {
    return this.id;
  }
}

const store = new Department('Charlie', 8);
store.addEmployee('David');

console.log(store.getDepartmentID());
