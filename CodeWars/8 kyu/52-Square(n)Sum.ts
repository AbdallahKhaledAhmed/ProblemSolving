// https://www.codewars.com/kata/515e271a311df0350d00000f
// This is My Solution

export function squareSum(numbers: number[]): number {
  return numbers.reduce((total, current) => (total += Math.pow(current, 2)), 0);
}

console.log(squareSum([1, 2, 3]));
