// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// This is My Solution

export function findOutlier(integers: number[]): number {
  let evens: number[] = [];
  let odds: number[] = [];
  integers.forEach((ele) => (ele % 2 === 0 ? evens.push(ele) : odds.push(ele)));
  return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([2, 4, 6, 8, 7, 10]));
