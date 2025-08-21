// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// This is My Solution

export function findMultiples(integer: number, limit: number): number[] {
  const arr: number[] = [];
  let x = 1;
  let y = integer;
  while (y <= limit) {
    arr.push(y);
    x++;
    y = integer * x;
  }
  return arr;
}

// Another Solution ( ALSO MINE )
export function findMultiples1(integer: number, limit: number): number[] {
  return Array.from({ length: Math.floor(limit / integer) }).map(
    (_, ind) => (ind + 1) * integer
  );
}

console.log(findMultiples(5, 25));
console.log(findMultiples1(5, 25));
