// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
// This is My Solution

export function stairsIn20(stairs: number[][]) {
  return stairs.reduce(
    (yearTotal, currentMonth) =>
      yearTotal +
      currentMonth.reduce((monthTotal, currentDay) => monthTotal + currentDay),
    0
  )*20;
}
