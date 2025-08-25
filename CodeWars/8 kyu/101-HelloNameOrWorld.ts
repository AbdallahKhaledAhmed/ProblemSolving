// https://www.codewars.com/kata/57e3f79c9cb119374600046b
// This is My Solution

export function hello(name = ""): string {
  return `Hello ${
    name
      .split("")
      .map((ele, ind) => (ind === 0 ? ele.toUpperCase() : ele.toLowerCase()))
      .join("") || "World"
  }!`;
}

console.log(hello());
console.log(hello("abdO"));
