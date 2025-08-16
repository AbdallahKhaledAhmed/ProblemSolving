// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// This is My Solution

function removeEveryOther(arr: string[] | number[]) {
  return arr.filter((_, ind) => ind % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
