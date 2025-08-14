// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// This is My Solution

export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (input == null || input.length === 0) return [];
  let [positiveCount, nigativeSum] = [0, 0];
  input.forEach((ele) => {
    ele <= 0 ? (nigativeSum += ele) : positiveCount++;
  });
  return [positiveCount, nigativeSum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 0, -1, -2, -3, -4, -5]));
