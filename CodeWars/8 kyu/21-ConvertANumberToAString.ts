// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
// This is My Solution

export function numberToString(num: number): string {
  return num.toString();
}

export function numberToString1(num: number): string {
  return `${num}`;
}

export function numberToString2(num: number): string {
  return String(num);
}

console.log(numberToString(11.5));
console.log(numberToString1(11.6));
console.log(numberToString2(11.7));
