// https://www.codewars.com/kata/57a55c8b72292d057b000594
// This is My Solution

export function reverse(str: string): string {
  return str.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World"));
