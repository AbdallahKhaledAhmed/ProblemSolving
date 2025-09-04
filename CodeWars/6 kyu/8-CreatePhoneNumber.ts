// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// This is My Solution

export function createPhoneNumber(numbers: number[]): string {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
