// https://www.codewars.com/kata/5aa736a455f906981800360d
// This is My Solution

export function feast(beast: string, dish: string): boolean {
  return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length - 1]);
}

console.log(feast("great blue heron", "garlic naan"));
