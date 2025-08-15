// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// This is My Solution

export function findAverage(array: number[]): number {
  return array.length === 0
    ? 0
    : array.reduce((total, current) => (total += current), 0) / array.length;
}

console.log(findAverage([1, 2, 3]));
