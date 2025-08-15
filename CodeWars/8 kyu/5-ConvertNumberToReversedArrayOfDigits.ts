// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// This is My Solution

export const digitize = (n: number): number[] => {
  const solution: number[] = Array.from(n.toString())
    .reverse()
    .map((elem) => +elem);
  return solution;
};


console.log(digitize(124))