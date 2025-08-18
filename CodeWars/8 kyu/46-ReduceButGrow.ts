// https://www.codewars.com/kata/57f780909f7e8e3183000078
// This is My Solution

export function grow(arr: number[]): number {
  return arr.reduce((total, current) => (total *= current), 1);
}

console.log(grow([1, 2, 3, 4]));
