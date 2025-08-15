//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// This is My Solution

export function noSpace(x: string): string {
  x = x.replace(/\s/g, "");
  return x;
}

console.log(noSpace("H e l l o"));
