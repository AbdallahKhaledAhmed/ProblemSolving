// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// This is My Solution

export function isIsogram(str: string): boolean {
  return str.length === new Set(str.toLowerCase().split("")).size;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
