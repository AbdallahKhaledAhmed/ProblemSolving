// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// This is My Solution

export function isPalindrome(x: string): boolean {
  x = x.toLowerCase();
  return x === Array.from(x).reverse().join("");
}

console.log(isPalindrome("Abba"));
