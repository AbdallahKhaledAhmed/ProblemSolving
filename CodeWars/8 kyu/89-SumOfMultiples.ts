// https://www.codewars.com/kata/57241e0f440cd279b5000829
// This is My Solution

export function sumMul(n: number, m: number): number | string {
  return (
    Array.from({ length: Math.floor((m - 1) / n) }).reduce(
      (total: number, _, ind) => total + (ind + 1) * n,
      0
    ) || "INVALID"
  );
}

console.log(sumMul(100, 14200));
