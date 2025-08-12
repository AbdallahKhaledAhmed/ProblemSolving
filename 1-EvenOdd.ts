// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// This is My Solution
export function evenOrOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));

// =======================================================

// Other Good Solution (Not Mine)
export function evenOdd(num: number): string {
  return num % 2 === 0 ? "Even" : "Odd";
}
