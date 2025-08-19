// https://www.codewars.com/kata/559d2284b5bb6799e9000047
// This is My Solution

export function addLength(str: string): string[] {
  return str.split(" ").map((str) => (str += ` ${str.length}`));
}

console.log(addLength("apple ban"));
