enum Color {
  Red = 1,
  Green,
  Blue,
}

export default function TsFeat() {
  const color: string = Color[1];
  const c: number = Color.Blue;
  console.log(c);
  const str: string = 'ts';
  const str1: String = 'feat'; // not Recommend
  return (
    <div style={{ color }}>
      {str} {str1}
    </div>
  );
}
