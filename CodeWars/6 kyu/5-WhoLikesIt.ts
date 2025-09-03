// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// This is My Solution

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

export const likes = (a: string[]): string => {
  const len = a.length;
  return len === 0
    ? "no one likes this"
    : len === 1
    ? a[0] + " likes this"
    : len === 2
    ? a.join(" and ") + " like this"
    : len === 3
    ? a.slice(0, 2).join(", ") + " and " + a.slice(-1) + " like this"
    : a.slice(0, 2).join(", ") + ` and ${len - 2} others like this`;
};

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
