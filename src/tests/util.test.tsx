import { getMonthBetween } from '../utils';

test('getMonthBetween', () => {
  let result = getMonthBetween('2020-09', '2021-01');
  expect(result).toEqual([
    '2020-09',
    '2020-10',
    '2020-11',
    '2020-12',
    '2021-01',
  ]);

  result = getMonthBetween('2020-08', '2020-08');

  expect(result).toEqual(['2020-08']);

  result = getMonthBetween('2020-01', '2020-10');

  expect(result).toEqual([
    '2020-01',
    '2020-02',
    '2020-03',
    '2020-04',
    '2020-05',
    '2020-06',
    '2020-07',
    '2020-08',
    '2020-09',
    '2020-10',
  ]);
});
