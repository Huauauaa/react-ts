import { v4 } from 'uuid';

const fn = Symbol();
const ln = Symbol();
const id = Symbol('id');
const inspect = Symbol.for('nodejs.util.inspect.custom');

class Student {
  [fn]: string;
  [ln]: string;
  private [id] = v4();

  constructor(firstName: string, lastName: string) {
    this[fn] = firstName;
    this[ln] = lastName;
  }

  get name() {
    return `${this[fn]} ${this[ln]}`;
  }

  toString() {
    return `{[Student]-${this.name}}`;
  }

  valueOf() {
    return 'valueOf';
  }

  [inspect]() {
    return this.toString();
  }
}

export default Student;
