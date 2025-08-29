// https://www.codewars.com/kata/546e2562b03326a88e000020
// This is My Solution

export class Kata {
  static squareDigits(num: number) {
    return +num
      .toString()
      .split("")
      .map((ele) => (parseInt(ele) ** 2).toString())
      .join("");
  }
}

console.log(Kata.squareDigits(3212));
