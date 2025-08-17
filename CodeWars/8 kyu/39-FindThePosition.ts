// https://www.codewars.com/kata/5808e2006b65bff35500008f
// This is My Solution

export function position(alphabet: string): string {
  return `Position of alphabet: ${alphabet.charCodeAt(0) - 96}`;
}

console.log(position("a"));
