// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// This is My Solution

export function sumArray(array: number[] | null): number {
  if (array === null) return 0;

  const len: number = array.length;
  array = array.sort((a, b) => a - b);

  const sum: number = array.reduce((total, current, ind) => {
    return ind === 0 || ind === len - 1 ? total : (total += current);
  }, 0);

  return sum;
}

console.log(sumArray([6, 0, 1, 10, 10]));

/* 
/////////////// Notes ///////////////

Math.min(...array) => returns the lowest value in the array
Math.max(...array) => returns the highest value in the array
array.slice (start, end) => Returns a slice from the array
*/
