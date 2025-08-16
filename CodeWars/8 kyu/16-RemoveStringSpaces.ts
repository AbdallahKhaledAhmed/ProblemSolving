// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// This is My Solution

export function noSpace(x: string): string {
  x = x.replace(/\s/g, "");
  return x;
}

// Other Good Solution (Not Mine)
export function noSpace1(x: string): string {
  return x.split(" ").join("");
}

console.log(noSpace("H e l l o"));
console.log(noSpace1("H e l l o"));
