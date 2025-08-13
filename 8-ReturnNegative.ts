// https://www.codewars.com/kata/55685cd7ad70877c23000102
// This is My Solution

export const makeNegative = (num: number): number => {
  return num <= 0 ? num : -num;
};

console.log(makeNegative(-1));
console.log(makeNegative(1));
console.log(makeNegative(0));
