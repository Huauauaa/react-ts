export default function MdnDemo() {
  const months: string[] = ['March', 'Jan', 'Feb', 'Dec'];
  const sortedMonths: string[] = [...months].sort();

  const numbers: Array<number> = [1, 30, 4, 21, 100000];
  const sortedNumbers: Array<number> = [...numbers].sort();

  return (
    <ul>
      <ol>months: {months.join(' ')}</ol>
      <ol>months.sort(): {sortedMonths.join(' ')}</ol>
      <ol>numbers: {numbers.join(' ')}</ol>
      <ol>numbers.sort(): {sortedNumbers.join(' ')}</ol>
    </ul>
  );
}
