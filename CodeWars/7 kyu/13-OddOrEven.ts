// https://www.codewars.com/kata/5949481f86420f59480000e7
// This is My Solution

export const oddOrEven = (array: number[]) =>
  array.reduce((t, c) => t + c, 0) % 2 === 0 ? "even" : "odd";

console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([]));
