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

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
