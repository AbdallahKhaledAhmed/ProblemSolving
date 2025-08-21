// https://www.codewars.com/kata/563b74ddd19a3ad462000054
// This is My Solution

export const stringy = (n: number): string =>
  Array(n)
    .fill("1")
    .map((_, ind) => (ind % 2 === 0 ? "1" : "0"))
    .join("");

console.log(stringy(4));
