// https://www.codewars.com/kata/52597aa56021e91c93000cb0
// This is My Solution

function moveZeros(arr: any[]): any[] {
  const zeroCount = arr.reduce(
    (total, current) => (current === 0 ? total + 1 : total),
    0
  );
  return arr
    .filter((ele) => ele !== 0)
    .concat(Array.from({ length: zeroCount }).fill(0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(
  moveZeros([
    9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0,
  ])
);
