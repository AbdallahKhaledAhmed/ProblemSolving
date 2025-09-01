// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// This is My Solution

export function findShort(s: string): number {
  return s
    .split(" ")
    .reduce(
      (shortest, current) =>
        current.length < shortest || shortest === 0 ? current.length : shortest,
      0
    );
}

// Other Good Solution (Not Mine)

export function findShort1(s: string): number {
  return Math.min(...s.split(" ").map((ele) => ele.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort1("bitcoin take over the world maybe who knows perhaps"));
