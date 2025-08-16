// https://www.codewars.com/kata/53af2b8861023f1d88000832
// This is My Solution


function removeEveryOther(arr: string[] | number[]) {
  return arr.filter((_, ind) => (ind % 2 === 0 ? true : false));
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
