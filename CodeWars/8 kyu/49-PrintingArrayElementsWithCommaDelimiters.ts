// https://www.codewars.com/kata/56e2f59fb2ed128081001328
// This is My Solution

export function printArray<T>(array: T[]): string {
  return `${array.toString()}`;
}

// Other Solution
export function printArray1<T>(array: T[]): string {
  return array.join(",");
}

console.log(printArray([2, 4, 5, 2]));
console.log(printArray1([2, 4, 5, 2]));
