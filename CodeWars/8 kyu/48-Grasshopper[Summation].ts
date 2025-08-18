// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// This is My Solution

export const summation = (num: number): number => {
  let ans: number = 0;
  for (let i = 1; i <= num; i++) {
    ans += i;
  }
  return ans;
};

console.log(summation(8));
