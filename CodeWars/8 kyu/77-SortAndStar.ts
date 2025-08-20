// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
// This is My Solution

export function twoSort(s: string[]): string {
  s.sort();
  return s[0].split("").join("***");
}

console.log(
  twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"])
);
