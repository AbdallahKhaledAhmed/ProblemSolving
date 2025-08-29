// https://www.codewars.com/kata/56747fd5cb988479af000028
// This is My Solution

export function getMiddle(s: string) {
  const halfLen = Math.floor(s.length / 2);
  return s
    .split("")
    .filter((_, ind, arr) =>
      arr.length % 2 === 0
        ? ind === halfLen || ind === halfLen - 1
        : ind === halfLen
    )
    .join("");
}

console.log(getMiddle("test"));
console.log(getMiddle("tests"));
