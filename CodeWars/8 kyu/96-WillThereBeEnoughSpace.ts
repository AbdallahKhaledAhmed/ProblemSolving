// https://www.codewars.com/kata/5875b200d520904a04000003
// This is My Solution

export function enough(cap: number, on: number, wait: number): number {
  const result: number = cap - on - wait;
  return result >= 0 ? 0 : -result;
}

console.log(enough(10, 4, 5));
