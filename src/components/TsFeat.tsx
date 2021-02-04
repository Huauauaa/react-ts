enum Color {
  Red = 1,
  Green,
  Blue,
}

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;
/*
partial

type Partial<T> = {
  [P in keyof T]?: T[P];
};
*/
type Person = {
  name: string;
  age: number;
};

let hua: Person = {
  name: 'Harvey',
  age: 20,
};

type PartialPerson = Partial<Person>;

let partialPerson: PartialPerson = {
  name: 'Harvey',
};

type Person1 = {
  name: string;
  age: number;
  contact: {
    email: string;
    phone: number;
    wechat: string;
  };
};

type PartialPerson1 = Partial<Person1>;
/*

let partialPerson1: PartialPerson1 = {
  name: 'tom',
  contact: {
    // error
    email: 'goodboyb@qq.com',
  },
};

*/

let partialPerson1: PartialPerson1 = {
  name: 'tom',
  contact: {
    email: 'goodboyb@qq.com',
    phone: 1,
    wechat: '',
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Object ? DeepPartial<T[P]> : T[P];
};

type PartialPerson2 = DeepPartial<Person1>;

let partialPerson2: PartialPerson2 = {
  name: 'tom',
  contact: {
    email: 'goodboyb@qq.com',
  },
};

interface User {
  id: number;
  age: number;
}
type PartialUser = Partial<User>;
// type PartialUser = {
//     id?: number;
//     age?: number;
// }

let u0: PartialUser = {};
let u1: PartialUser = {
  id: 1,
};
let u2: PartialUser = {
  age: 1,
};
type PickUser = Required<User>;

// type PickUser = {
//     id: number;
//     age: number;
// }

// let u3: PickUser = {};
// Type '{}' is missing the following properties from type 'Required<User>': id, age

type petsGroup = 'dog' | 'cat' | 'fish';

type numOrStr = number | string;
/*
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
*/
type IPets = Record<petsGroup, numOrStr>;
// type IPets = {
//     dog: numOrStr;
//     cat: numOrStr;
//     fish: numOrStr;
// }

const pet: IPets = {
  dog: 1,
  cat: 1,
  fish: 1,
};

interface B {
  id: number;
  name: string;
  age: number;
}

type PickB = Pick<B, 'id' | 'name'>;

// type PickB = {
//     id: number;
//     name: string;
// }

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// type T0 = "a"

type T = {
  name: string;
  age: number;
};

type U = {
  name: string;
};

type IType = Extract<keyof T, keyof U>;
// type IType = "name"

class People {
  name: string;
  age: number = 1;

  constructor(name: string) {
    this.name = name;
  }
}

type IType1 = ConstructorParameters<typeof People>;
//equals: type IType = [name: string]

type IType2 = InstanceType<typeof People>;
//equals: type IType = People

// type IType = People
// 因为constructor默认返回this
// constructor People(name: string): People

type example = NonNullable<string | number | undefined>;
//equals: type example = string | number

type IFoo = (
  uname: string,
  uage: number,
) => {
  name: string;
  age: number;
};
//参数类型
type Ibar = Parameters<IFoo>;
//equals: type Ibar = [uname: string, uage: number]
type T10 = ReturnType<IFoo>;
//equals: type T0 = {
//     name: string;
//     age: number;
// }

export default function TsFeat() {
  const color: string = Color[1];
  const c: number = Color.Blue;
  console.log(c);
  const str: string = 'ts';
  const str1: String = 'feat'; // not Recommend
  const level: LogLevelStrings = 'DEBUG';

  return (
    <fieldset>
      <legend>TS</legend>
      <div style={{ color }}>
        {str} {str1} {typeof Color} {level}
      </div>
      name: {hua.name} {partialPerson.name}
    </fieldset>
  );
}
