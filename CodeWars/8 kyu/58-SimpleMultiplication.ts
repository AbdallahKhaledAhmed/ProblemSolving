// https://www.codewars.com/kata/583710ccaa6717322c000105
// This is My Solution

export function simpleMultiplication(num: number): number {
  return num % 2 === 0 ? num * 8 : num * 9;
}

console.log(simpleMultiplication(4));
console.log(simpleMultiplication(9));
