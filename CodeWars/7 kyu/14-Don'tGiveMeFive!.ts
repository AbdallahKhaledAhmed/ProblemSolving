// https://www.codewars.com/kata/5949481f86420f59480000e7
// This is My Solution

export function dontGiveMeFive(start: number, end: number) {
  return Array.from(
    { length: end - start + 1 },
    (_, ind) => start + ind
  ).reduce((t, c) => (c.toString().includes("5") ? t : t + 1), 0);
}

console.log(dontGiveMeFive(1, 5));
