// https://www.codewars.com/kata/56b1f01c247c01db92000076
// This is My Solution

export function doubleChar(str: string): string {
  const repeatedText = Array.from(str).reduce((newString, currentChar) => {
    return (newString += currentChar.repeat(2));
  }, "");
  return repeatedText;
}

console.log(doubleChar("hell o1234"));
