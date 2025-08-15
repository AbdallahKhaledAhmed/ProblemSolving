// https://www.codewars.com/kata/5715eaedb436cf5606000381
// This is My Solution
export function positiveSum(arr: number[]): number {
  if (arr.length === 0) return 0;

  const sum: number = arr.reduce((total, current) => {
    return current > 0 ? (total += current) : total;
  }, 0);

  return sum;
}

console.log(positiveSum([1, 0, -2, 2, -1, 3, 4]));
