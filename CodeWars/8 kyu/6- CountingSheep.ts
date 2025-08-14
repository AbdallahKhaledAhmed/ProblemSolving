// https://www.codewars.com/kata/54edbc7200b811e956000556
// This is My Solution

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let count: number = 0;
  arrayOfSheep.forEach((elem) => {
    elem && count++;
  });
  return count;
}

console.log(countSheeps([true, false, null, undefined]));
