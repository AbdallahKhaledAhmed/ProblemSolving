// https://www.codewars.com/kata/58649884a1659ed6cb000072
// This is My Solution

export function updateLight(current: string): string {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
