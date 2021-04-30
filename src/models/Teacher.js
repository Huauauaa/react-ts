export default class Teacher {
  _id = 1;
  constructor(name = 'anonymity') {
    this.name = name;
  }

  get info() {
    return `id: ${this._id};name: ${this.name}`;
  }

  toString() {
    return `[${this.name} -${this._id} ]`;
  }

  get [Symbol.toStringTag]() {
    return 'Teacher';
  }
}
