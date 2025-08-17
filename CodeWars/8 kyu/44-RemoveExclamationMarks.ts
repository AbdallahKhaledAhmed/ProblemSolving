// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// This is My Solution

function removeExclamationMarks(s: string): string {
  return s.replace(/!/g, "");
}

// Other Solution (Also Mine)

function removeExclamationMarks1(s: string): string {
  return s.split("!").join("");
}

console.log(removeExclamationMarks("Hello! World!!"));
console.log(removeExclamationMarks1("Hello! World!!"));
