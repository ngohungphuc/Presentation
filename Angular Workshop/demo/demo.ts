let a = 1;
let a = 1;

const b = 2;
b = 3;

class One {
  private readonly data1;
  /**
   *
   */
  constructor() {
    this.data1 = 1;
  }

  setSomething() {
      this.data1 = 2;
  }
}

abstract class People {
  abstract baseRate: number;
  abstract workingDay: number;

  abstract calculateSalary();
}

class Employee extends People {
  baseRate: number;
  workingDay: number;
  /**
   *
   */
  constructor() {
      super();
  }

  calculateSalary(): number {
    return this.baseRate * this.workingDay;
  }
}
