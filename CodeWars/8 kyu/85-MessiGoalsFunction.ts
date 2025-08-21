// https://www.codewars.com/kata/55f73be6e12baaa5900000d4
// This is My Solution

export function goals(...goals: number[]): number {
  return goals.reduce((a, b) => a + b);
}

console.log(goals(5, 4, 1));
