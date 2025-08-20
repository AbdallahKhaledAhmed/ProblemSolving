// https://www.codewars.com/kata/5601409514fc93442500010b
// This is My Solution

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    classPoints.reduce((total, current) => (total += current), 0) /
      classPoints.length <
    yourPoints
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
