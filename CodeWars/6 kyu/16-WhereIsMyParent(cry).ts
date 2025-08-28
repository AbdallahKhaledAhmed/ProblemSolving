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

console.log(findChildren("uwwWUueEe"));
