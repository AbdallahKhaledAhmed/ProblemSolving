// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// This is My Solution

export function sumArray(array: number[] | null): number {
  if (array === null) return 0;

  const len = array.length;
  array = array.sort((a, b) => a - b);

  let sum: number = array.reduce((total, current, ind) => {
    return ind === 0 || ind === len - 1 ? total : (total += current);
  }, 0);

  return sum;
}

console.log(sumArray([6, 0, 1, 10, 10]));
