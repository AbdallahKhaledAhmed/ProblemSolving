// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// This is My Solution

export function removeChar(str: string): string {
  let parsedString: string[] = Array.from(str);
  parsedString.shift();
  parsedString.pop();
  return parsedString.join("");
}

// Other Solution (Also Mine)
export function removeChar1(str: string): string {
  return str.slice(1, -1);
}
