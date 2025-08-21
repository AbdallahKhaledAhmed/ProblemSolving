// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// This is My Solution

export const distinct = (a: number[]): number[] => {
  return a.filter((ele, ind) => a.indexOf(ele) === ind);
};

console.log(distinct([1, 1, 2]));

// note : you can just use Set :)
