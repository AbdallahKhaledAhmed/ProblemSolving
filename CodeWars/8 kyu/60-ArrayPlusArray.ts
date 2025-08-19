// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// This is My Solution

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((sum, current) => (sum += current), 0);
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
