// https://www.codewars.com/kata/523f5d21c841566fde000009
// This is My Solution

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((ele) => !b.includes(ele));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
