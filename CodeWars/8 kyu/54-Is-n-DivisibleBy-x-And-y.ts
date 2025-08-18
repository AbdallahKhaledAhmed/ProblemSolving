// https://www.codewars.com/kata/5545f109004975ea66000086
// This is My Solution

export function isDivisible(n: number, x: number, y: number): boolean {
  return Number.isInteger(n / x) && Number.isInteger(n / y);
}

// Other Good Solution (Not Mine)
export function isDivisible1(n: number, x: number, y: number): boolean {
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(12, 3, 4));
console.log(isDivisible1(12, 3, 4));
