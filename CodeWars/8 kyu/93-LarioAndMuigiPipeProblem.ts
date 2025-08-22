// https://www.codewars.com/kata/56b29582461215098d00000f
// This is My Solution

export function pipeFix(numbers: number[]): number[] {
  return Array.from({
    length: numbers[numbers.length - 1] - numbers[0] + 1,
  }).map((_, ind) => numbers[0] + ind);
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
