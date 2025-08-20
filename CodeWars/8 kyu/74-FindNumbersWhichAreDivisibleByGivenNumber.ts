// https://www.codewars.com/kata/55edaba99da3a9c84000003b
// This is My Solution

export function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter((num) => Number.isInteger(num / divisor));
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
