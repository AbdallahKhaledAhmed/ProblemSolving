// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// This is My Solution

function removeExclamationMarks(s: string): string {
  return s.replace(/!/g, "");
}

console.log(removeExclamationMarks("Hello! World!!"));
