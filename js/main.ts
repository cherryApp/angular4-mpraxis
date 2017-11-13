class Student {
  private fullName: string;
  constructor(firstName: string, lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }

  getFullName() {
    return this.fullName;
  }
}


interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  address?: string;
  getFirstName();
}
interface Worker extends Person {
  job: string;
  getJob();
}
interface Lazy extends Person {
  sleep: number;
  getSleep();
}
interface MpraxisWorker extends Worker, Lazy {

}


function helloGuy(person: Student) {
  return `Hello ${person.getFullName()}!`;
}

let user = new Student("Charlie", "Filpo");
console.log(helloGuy(user));
