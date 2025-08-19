// https://www.codewars.com/kata/577bd026df78c19bca0002c0
// This is My Solution

export function correct(s: string): string {
  return s.replace(/[501]/g, (match) =>
    match === "5" ? "S" : match === "0" ? "O" : "I"
  );
}

console.log(correct("L0ND0N"));
