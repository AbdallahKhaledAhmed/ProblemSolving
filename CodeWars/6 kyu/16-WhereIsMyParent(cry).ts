// https://www.codewars.com/kata/58539230879867a8cd00011c
// This is My Solution

function findChildren(dancingBrigade: string): string {
  let str = dancingBrigade.split("").sort();
  let strCaps = str.filter((ele) => ele === ele.toUpperCase());
  str = strCaps.map(
    (ele) =>
      ele +
      ele
        .toLowerCase()
        .repeat(str.filter((char) => char === ele.toLowerCase()).length)
  );
  return str.join("");
}

// other solution (Also Mine)

function findChildren1(dancingBrigade: string): string {
  let str = dancingBrigade.toLowerCase();
  return str
    .split("")
    .sort()
    .map((ele, ind, arr) => (ele !== arr[ind - 1] ? ele.toUpperCase() : ele))
    .join("");
}

console.log(findChildren("uwwWUueEe"));
console.log(findChildren1("uwwWUueEe"));
