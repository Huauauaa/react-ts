export function getMonthBetween(str1: string, str2: string) {
  const arr1 = str1.split('-').map(Number);
  const arr2 = str2.split('-').map(Number);
  let countYear = arr1[0];
  let countMonth = arr1[1];
  const result = [yearMonthString(arr1[0], arr1[1])];

  while (!(countYear === arr2[0] && countMonth === arr2[1])) {
    countMonth += 1;
    if (countMonth > 12) {
      countMonth = 1;
      countYear += 1;
    }
    result.push(yearMonthString(countYear, countMonth));
  }

  return result;
}

function yearMonthString(year: number, month: number) {
  const monthString = `${month}`.padStart(2, '0');
  return `${year}-${monthString}`;
}
