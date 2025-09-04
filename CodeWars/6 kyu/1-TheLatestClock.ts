// https://www.codewars.com/kata/58925dcb71f43f30cd00005f
// This is My Solution

export function latestClock(...args: number[]) {
  args.sort().reverse();
  const hours: number[][][] = [];
  const mins: number[][][] = [];
  args.forEach((num, ind, arr) =>
    arr.forEach((num1, ind1) => {
      if (ind !== ind1) {
        const mix = Number(num.toString() + num1);
        if (mix < 24 )
          hours.push([
            [num, num1],
            [ind, ind1],
          ]);
        else if (mix < 60 )
          mins.push([
            [num, num1],
            [ind, ind1],
          ]);
      }
    })
  );
  for (let i = 0; i < hours.length; i++) {
    for (let ind = 0; ind < mins.length; ind++) {
      if (
        !(
          mins[ind][1].includes(hours[i][1][0]) ||
          mins[ind][1].includes(hours[i][1][1])
        )
      ) {
        return `${hours[i][0].join("")}:${mins[ind][0].join("")}`;
      }
    }
  }
  return `00:00`;
}

console.log(latestClock(9, 1, 2, 5));
console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(1, 2, 8, 9));
console.log(latestClock(0, 0, 0, 0));
console.log(latestClock(1, 9, 0, 0));
