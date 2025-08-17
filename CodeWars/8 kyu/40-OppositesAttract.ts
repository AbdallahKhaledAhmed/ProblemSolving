// https://www.codewars.com/kata/555086d53eac039a2a000083
// This is My Solution

export function lovefunc(flower1: number, flower2: number): boolean {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1, 2));
console.log(lovefunc(1, 3));
console.log(lovefunc(2, 3));
