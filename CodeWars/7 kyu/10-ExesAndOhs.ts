// https://www.codewars.com/kata/55908aad6620c066bc00002a
// This is My Solution

export function xo(str: string): boolean {
  return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}

console.log(xo("ooxx"));
console.log(xo("xooxx"));
console.log(xo("ooxXm"));
console.log(xo("zpzpzpp"));
console.log(xo("zzoo"));
