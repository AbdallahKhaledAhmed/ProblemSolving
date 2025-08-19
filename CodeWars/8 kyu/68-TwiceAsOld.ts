// https://www.codewars.com/kata/5b853229cfde412a470000d0
// This is My Solution

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(36, 7));
