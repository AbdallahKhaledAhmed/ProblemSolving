// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// This is My Solution

export function accum(s: string): string {
  return s
    .split("")
    .map((ele, ind) => ele.toUpperCase() + ele.toLowerCase().repeat(ind))
    .join("-");
}

console.log(accum("abcd"));
