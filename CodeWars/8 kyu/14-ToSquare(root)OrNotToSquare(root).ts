// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
// This is My Solution

export function squareOrSquareRoot(array: number[]): number[] {
  return array.map((elem) => {
    if (Number.isInteger(Math.sqrt(elem))) {
      return Math.sqrt(elem);
    } else {
      return Math.pow(elem, 2);
    }
  });
}

console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));
