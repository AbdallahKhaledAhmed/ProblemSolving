// This is My Solution

export function countPositivesSumNigatives(input: number[]): number[] {
  let [positiveCount, nigativeSum] = [0, 0];
  input.forEach((ele) => {
    ele <= 0 ? (nigativeSum += ele) : positiveCount++;
  });
  return [positiveCount, nigativeSum];
}

console.log(countPositivesSumNigatives([1, 2, 3, 4, 5, 0, -1, -2, -3, -4, -5]));
