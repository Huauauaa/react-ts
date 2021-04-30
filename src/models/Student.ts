import { v4 } from 'uuid';

const fn = Symbol();
const ln = Symbol();
const id = Symbol('id');
const inspect = Symbol.for('nodejs.util.inspect.custom');

class Student {
  [fn]: string;
  [ln]: string;
  private [id] = v4();
  test = 'foo';

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

  // static [Symbol.hasInstance](instance: any) {
  //   console.log('[Symbol.hasInstance]', instance);
  //   return true;
  // }

  // Object.toString.call() will dispatch this function
  get [Symbol.toStringTag]() {
    console.log('Symbol.toStringTag');
    return '学生';
  }
}

export default Student;
