// https://www.codewars.com/kata/514b92a657cdc65150000006
// This is My Solution

export class Challenge {
  static solution(number: number) {
    return Array.from({ length: number }, (_, ind) => ind).reduce(
      (result, current) =>
        current % 3 === 0 || current % 5 === 0 ? result + current : result,
      0
    );
  }
}

console.log(Challenge.solution(10));
