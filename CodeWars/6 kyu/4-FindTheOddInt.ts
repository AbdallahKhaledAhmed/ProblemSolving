// https://www.codewars.com/kata/54da5a58ea159efa38000836
// This is My Solution

export const findOdd = (xs: number[]) => {
  const numsObj: { [key: number]: number } = {};
  xs.forEach((ele) => (numsObj[ele] ? numsObj[ele]++ : (numsObj[ele] = 1)));
  for (let num in numsObj) {
    if (numsObj[num] % 2 !== 0) return Number(num);
  }
};
