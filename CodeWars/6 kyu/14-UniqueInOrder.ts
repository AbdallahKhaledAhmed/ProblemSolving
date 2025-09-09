// https://www.codewars.com/kata/54e6533c92449cc251001667
// This is My Solution

export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
  if (typeof iterable === "string") iterable = iterable.split("");
  return iterable.filter((ele, ind, arr) => ele !== arr[ind - 1]);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
