// https://www.codewars.com/kata/57eae65a4321032ce000002d
// This is My Solution

function sum(numbers: number[]) {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
