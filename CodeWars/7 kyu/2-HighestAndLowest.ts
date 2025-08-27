// https://www.codewars.com/kata/554b4ac871d6813a03000035
// This is My Solution

export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(" ").map((ele) => +ele);
    return [Math.max(...arr), Math.min(...arr)].join(" ");
  }
}
