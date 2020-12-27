enum E {
  // A = getSomeValue(),
  B = 2,
  C,
  // G = '123'.length,
  // Read = 1 << 1,
  // Write = 1 << 2,
}

function getSomeValue() {
  return 1;
}

export const foo = E.B;

interface man {
  age: E.C;
  name: string;
}

const harvey: man = {
  name: 'Harvey',
  age: E.C,
};

console.log(harvey);

function f(obj: { B: number }) {}
f(E);

// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }

// export default Clock;

// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }

// interface ClockInterface {
//   tick(): void;
// }

// function createClock(
//   ctor: ClockConstructor,
//   hour: number,
//   minute: number,
// ): ClockInterface {
//   return new ctor(hour, minute);
// }

// export class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log('beep beep');
//   }
// }

// export class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log('tick tock');
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
