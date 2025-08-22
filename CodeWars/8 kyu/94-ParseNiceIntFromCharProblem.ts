// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
// This is My Solution

export function get_age(age: string): number {
  return Number(age.split(" ").filter((ele) => parseInt(ele)));
}

console.log(get_age("5 years old"));
