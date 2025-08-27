// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// This is My Solution

export class Kata {
  static getCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    str.split("").forEach((ele) => {
      if (vowels.includes(ele)) {
        count++;
      }
    });
    return count;
  }
}
