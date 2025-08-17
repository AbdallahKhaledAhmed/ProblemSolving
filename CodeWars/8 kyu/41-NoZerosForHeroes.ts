// https://www.codewars.com/kata/570a6a46455d08ff8d001002
// This is My Solution

export function noBoringZeros(n: number): number {
  let nString = String(n);
  while (nString.length > 1 && nString.endsWith("0")) {
    nString = nString.slice(0, -1);
  }
  return Number(nString);
}

console.log(noBoringZeros(1050));
