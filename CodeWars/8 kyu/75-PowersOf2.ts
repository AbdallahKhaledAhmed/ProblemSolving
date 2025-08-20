// https://www.codewars.com/kata/57a083a57cb1f31db7000028
// This is My Solution

export function powersOfTwo(n: number): number[] {
  return Array(n + 1)
    .fill(0)
    .map((_, ind) => Math.pow(2, ind));
}

console.log(powersOfTwo(4));
