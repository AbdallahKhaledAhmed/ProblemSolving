// https://www.codewars.com/kata/57fae964d80daa229d000126
// This is My Solution

export function remove(s: string): string {
  return s.slice(-1) === "!" ? s.slice(0, -1) : s;
}

// Other Solution (Not Mine)
// Using Regex
export const remove1 = (s: string): string => s.replace(/!$/, "");

console.log(remove("Hi!!"));
console.log(remove1("Hi!!"));
