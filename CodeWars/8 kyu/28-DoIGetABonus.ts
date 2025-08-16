// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// This is My Solution

export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
  }
}

console.log(Kata.bonusTime(1000, true));
