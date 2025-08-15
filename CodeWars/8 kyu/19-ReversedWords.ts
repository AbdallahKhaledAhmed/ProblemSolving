// https://www.codewars.com/kata/51c8991dee245d7ddf00000e
// This is My Solution

export function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));
