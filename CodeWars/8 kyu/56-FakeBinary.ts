// https://www.codewars.com/kata/57eae65a4321032ce000002d
// This is My Solution

export const fakeBin = (x: string): string => {
  return Array.from(x)
    .map((ele) => (+ele < 5 ? 0 : 1))
    .join("");
};

console.log(fakeBin("45385593107843568"));
