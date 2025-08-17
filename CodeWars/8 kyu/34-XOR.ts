// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
// This is My Solution

export const xor = (a: boolean, b: boolean): boolean => {
  return a !== b;
};

console.log(xor(false, false));
console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, true));
