// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
// This is My Solution

export function hoopCount(n: number): string {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(6));
console.log(hoopCount(10));
console.log(hoopCount(22));
