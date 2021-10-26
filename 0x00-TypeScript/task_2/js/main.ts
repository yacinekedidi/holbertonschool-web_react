interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface createEmployeeFunction {
  (salary: number | string): Teacher | Director;
}

let createEmployee: createEmployeeFunction;

createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

interface EmployeeFunction {
  (employee: Director | Teacher): boolean;
}

let isDirector: EmployeeFunction;

isDirector = (employee: Director | Teacher): boolean => {
  return employee instanceof Director ? true : false;
};

interface executeWorkFunction {
  (employee: Director | Teacher): string;
}
let executeWork: executeWorkFunction;

executeWork = (employee: Director | Teacher): string => {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
};

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

interface teachClassFunction {
  (todayClass: Subjects): string;
}

let teachClass: teachClassFunction;

teachClass = (todayClass: Subjects): string => {
  return `Teaching ${todayClass}`;
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
