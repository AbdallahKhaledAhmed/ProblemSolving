// https://www.codewars.com/kata/57d814e4950d8489720008db
// This is My Solution

export function index(array: number[], n: number): number {
  return array[n] ** n || -1;
}

console.log(index([1, 3, 10, 100], 3));
