// https://www.codewars.com/kata/559ac78160f0be07c200005a
// This is My Solution

function nameShuffler(str: string) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));
