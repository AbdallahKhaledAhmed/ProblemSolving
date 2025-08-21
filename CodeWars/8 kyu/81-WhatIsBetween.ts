// https://www.codewars.com/kata/55ecd718f46fba02e5000029
// This is My Solution

export function between(a: number, b: number): number[] {
  return Array(b - a + 1)
    .fill(0)
    .map((_, ind) => ind + a);
}

console.log(between(2, 6));
