// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
// This is My Solution

export function expressionsMatter(a: number, b: number, c: number): number {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}

console.log(expressionsMatter(1, 1, 1));
