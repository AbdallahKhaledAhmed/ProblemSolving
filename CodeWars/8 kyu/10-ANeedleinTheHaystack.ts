// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// This is My Solution

export function findNeedle(haystack: any[]): string {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    null,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
