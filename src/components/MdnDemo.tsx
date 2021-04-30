import Student from '../models/Student';
import Teacher from '../models/Teacher';

export default function MdnDemo() {
  const months: string[] = ['March', 'Jan', 'Feb', 'Dec'];
  const sortedMonths: string[] = [...months].sort();

  const numbers: Array<number> = [1, 30, 4, 21, 100000];
  const sortedNumbers: Array<number> = [...numbers].sort();

  const fooMap = new Map();
  fooMap.set(0, '0');
  fooMap.set(-0, '-0');
  fooMap.set(+0, '+0');
  fooMap.set(NaN, 'NaN');
  fooMap.set(NaN, 'not a number');

  console.log(fooMap);

  const number = 3500;

  const stu = new Student('Harvey', 'Hua');
  const stu1 = new Student('Kobe', 'Bryant');

  console.log(
    stu,
    stu1,
    stu instanceof Student,
    {} instanceof Student,
    Student[Symbol.hasInstance](stu),
    Student[Symbol.hasInstance]({}),
    stu.toString(),
    Object.prototype.toString.call(stu),
    Object.keys(stu),
    stu.name,
    stu.test,
  );

  const teach = new Teacher();

  console.log('teach', teach, teach.toString(), Object.prototype.toString.call(teach));

  return (
    <>
      <fieldset>
        <legend>class</legend>
        <ul>
          <li>{`${stu}`}</li>
          <li>{stu1.name}</li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Intl</legend>
        <ul>
          <li>{new Intl.NumberFormat().format(number)}</li>
          <li>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(number)}
          </li>
          <li>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'CNY',
              minimumIntegerDigits: 21,
            }).format(number)}
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Map</legend>
        <ul>
          {Array.from(fooMap.keys()).map((key: any, index: number) => {
            return (
              <li key={index}>
                {key}: {fooMap.get(key)}
              </li>
            );
          })}
        </ul>
      </fieldset>
      <fieldset>
        <legend>sort</legend>
        <ul>
          <ol>months: {months.join(' ')}</ol>
          <ol>months.sort(): {sortedMonths.join(' ')}</ol>
          <ol>numbers: {numbers.join(' ')}</ol>
          <ol>numbers.sort(): {sortedNumbers.join(' ')}</ol>
        </ul>
      </fieldset>
    </>
  );
}
