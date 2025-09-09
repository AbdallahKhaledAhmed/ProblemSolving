// https://www.codewars.com/kata/58925dcb71f43f30cd00005f
// This is My Solution

export function latestClock(...args: number[]) {
  const time: string[] = [];
  args.forEach((e1, i1) => {
    args.forEach((e2, i2) => {
      if (i2 !== i1) {
        args.forEach((e3, i3) => {
          if (i3 !== i2 && i3 !== i1) {
            args.forEach((e4, i4) => {
              if (i4 !== i3 && i4 !== i2 && i4 !== i1) {
                time.push(e1.toString() + e2 + e3 + e4);
              }
            });
          }
        });
      }
    });
  });
  const lastTime = time
    .sort()
    .reverse()
    .filter((ele) => +ele.slice(0, 2) < 24 && +ele.slice(2) < 60)[0];

  return lastTime.slice(0, 2) + ":" + lastTime.slice(2);
}

console.log(latestClock(9, 1, 2, 5));
console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(1, 2, 8, 9));
console.log(latestClock(0, 0, 0, 0));
console.log(latestClock(1, 9, 0, 0));
