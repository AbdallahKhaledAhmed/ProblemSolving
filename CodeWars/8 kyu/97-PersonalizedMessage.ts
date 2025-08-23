// https://www.codewars.com/kata/5772da22b89313a4d50012f7
// This is My Solution

export function greet(name: string, owner: string): string {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));
