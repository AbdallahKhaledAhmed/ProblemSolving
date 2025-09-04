// https://www.codewars.com/kata/541c8630095125aba6000c00
// This is My Solution

const sol = (n: number): number => {
  let sum = n
    .toString()
    .split("")
    .reduce((t, c) => t + +c, 0);
  return sum > 9 ? sol(sum) : sum;
};

export const digitalRoot = (n: number): number => {
  return sol(n);
};

console.log(digitalRoot(15));
