// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// This is My Solution

export function sumMix(x: any[]): number {
  return x.reduce((total, current) => total + +current, 0);
}

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
