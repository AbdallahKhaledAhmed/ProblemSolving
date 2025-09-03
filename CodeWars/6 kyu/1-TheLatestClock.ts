// https://www.codewars.com/kata/58925dcb71f43f30cd00005f
// This is My Solution

export function latestClock(...args: number[]) {
  // sort and reverse the arguments
  args.sort().reverse();
  const results: number[][] = [[], []];
  // splitting the numbers 2 or below and the numbers over 2 to 2 arrays
  args.forEach((ele) => {
    if (ele < 3) results[0].push(ele);
    else results[1].push(ele);
  });
  // get hours
  const hours = [
    results[0][0],
    results[0].shift() === 2
      ? results[1].filter((ele) => ele < 4).shift() || results[0].shift()
      : results[1].shift(),
  ].join("");
  // get mins
  const mins = [...results[0], ...results[1]]
    .sort((a, b) => (Number(`${a}${b}`) >= 60 ? 1 : -1))
    .join("");

  return `${hours}:${mins}`;
}

console.log(latestClock(9, 1, 2, 5));
console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(1, 2, 8, 9));
