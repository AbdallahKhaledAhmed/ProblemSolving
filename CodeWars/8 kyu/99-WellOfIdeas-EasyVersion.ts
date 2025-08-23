// https://www.codewars.com/kata/57f222ce69e09c3630000212
// This is My Solution

export function well(x: string[]): string {
  const totalGood = x.reduce(
    (total, current) => (current === "good" ? total + 1 : total),
    0
  );
  return totalGood < 1
    ? "Fail!"
    : totalGood > 2
    ? "I smell a series!"
    : "Publish!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));
