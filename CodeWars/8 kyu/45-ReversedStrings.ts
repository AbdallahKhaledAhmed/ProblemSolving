// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// This is My Solution

export function solution(str: string): string {
  return Array.from(str).reverse().join("");
}

console.log(solution("world"));
