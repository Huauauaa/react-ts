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
    </fieldset>
  );
}
