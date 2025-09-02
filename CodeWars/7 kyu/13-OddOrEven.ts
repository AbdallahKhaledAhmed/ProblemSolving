// https://www.codewars.com/kata/5949481f86420f59480000e7
// This is My Solution

export const oddOrEven = (array: number[]) =>
  array.reduce((t, c) => t + c, 0) % 2 === 0 ? "even" : "odd";
