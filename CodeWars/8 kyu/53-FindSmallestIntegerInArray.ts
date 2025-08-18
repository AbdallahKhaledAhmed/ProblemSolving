// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// This is My Solution

export function findSmallestInt(args: number[]): number {
  return args.reduce(
    (smallest, current) => (smallest < current ? smallest : current),
    args[0]
  );
}

// Other Good Solution (Not Mine)
export function findSmallestInt1(args: number[]): number {
  return Math.min(...args);
}

console.log(findSmallestInt([34, -345, -1, 100]));
console.log(findSmallestInt1([34, -345, -1, 100]));
