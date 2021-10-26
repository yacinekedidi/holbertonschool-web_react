interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string): string =>
  `${firstName[0]}. ${lastName}`;

console.log(printTeacher('John', 'Doe'));

interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: classConstructor = class StudentClass
  implements classInterface
{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

const sc = new StudentClass('John', 'Doe');
console.log(sc.workOnHomework());
console.log(sc.displayName());
