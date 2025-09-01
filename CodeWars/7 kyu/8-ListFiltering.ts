// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// This is My Solution

export function filter_list(l: Array<any>): Array<number> {
  return l.filter((ele) => Number.isInteger(ele));
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
