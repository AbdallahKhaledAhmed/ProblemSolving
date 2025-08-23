// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// This is My Solution

const areaOrPerimeter = function (l: number, w: number): number {
  return l === w ? l * w : l * 2 + w * 2;
};

console.log(areaOrPerimeter(2, 2));
console.log(areaOrPerimeter(2, 3));
