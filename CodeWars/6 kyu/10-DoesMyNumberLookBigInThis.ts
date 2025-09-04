// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// This is My Solution

export function narcissistic(value: number): boolean {
  const str = value.toString().split("");
  const len = str.length;
  return str.reduce((t, c) => t + Math.pow(+c, len), 0) === value;
}

console.log(narcissistic(7));
console.log(narcissistic(153));
