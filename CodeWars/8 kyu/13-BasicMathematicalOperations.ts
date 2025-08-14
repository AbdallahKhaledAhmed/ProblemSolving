// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// This is My Solution

export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

// other solution (Also Mine)
// eval function is a function that executes any javascript code that is written in a string

export function basicOp1(
  operation: string,
  value1: number,
  value2: number
): number {
  return eval(`${value1} ${operation} ${value2}`); // Note : using eval function in production is very dangerous
}
