// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// This is My Solution

export function monkeyCount(n: number): number[] {
  const monkeys: number[] = [];
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }
  return monkeys;
}

console.log(monkeyCount(10));
