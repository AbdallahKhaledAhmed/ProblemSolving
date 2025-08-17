// https://www.codewars.com/kata/5547929140907378f9000039
// This is My Solution

const vowels = ["a", "e", "i", "o", "u"];
function shortcut(string: string): string {
  return Array.from(string)
    .filter((char) => !vowels.includes(char))
    .join("");
}

console.log(shortcut("go to hello"));
