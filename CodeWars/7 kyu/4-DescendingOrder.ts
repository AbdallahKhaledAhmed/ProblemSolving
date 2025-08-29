// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// This is My Solution

export function descendingOrder(n: number): number {
  return +n.toString().split("").sort().reverse().join("");
}

console.log(descendingOrder(123456789));
