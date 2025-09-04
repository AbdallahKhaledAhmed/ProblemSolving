// https://www.codewars.com/kata/517abf86da9663f1d2000003
// This is My Solution

export function toCamelCase(str: string): string {
  return str
    .replace(/[_-]/g, " ")
    .split(" ")
    .map((ele, ind) =>
      ind > 0 ? ele.charAt(0).toUpperCase() + ele.slice(1) : ele
    )
    .join("");
}

console.log(toCamelCase("the_stealth_warrior wins"));
