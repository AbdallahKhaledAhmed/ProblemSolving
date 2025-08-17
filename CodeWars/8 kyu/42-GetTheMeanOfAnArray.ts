// https://www.codewars.com/kata/563e320cee5dddcf77000158
// This is My Solution

export function getAverage(marks: number[]): number {
  const sum = marks.reduce((totaL, current) => (totaL += current), 0);
  return Math.floor(sum / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));
