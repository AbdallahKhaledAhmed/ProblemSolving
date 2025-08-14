// This is My Solution

function DoubleChar(str: string): string {
  const repeatedText = Array.from(str).reduce((newString, currentChar) => {
    return (newString += currentChar.repeat(2));
  }, "");
  return repeatedText;
}

console.log(DoubleChar("hell o1234"));
