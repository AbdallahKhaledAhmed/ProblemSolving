// https://www.codewars.com/kata/5302d846be2a9189af0001e4
// This is My Solution

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// Hello, John Smith! Welcome to Phoenix, Arizona!

export const sayHello = (
  name: string[],
  city: string,
  state: string
): string => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
};

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
