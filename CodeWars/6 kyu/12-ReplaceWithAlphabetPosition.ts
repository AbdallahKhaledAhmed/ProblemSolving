// https://www.codewars.com/kata/546f922b54af40e1e90001da
// This is My Solution

export function alphabetPosition(text: string): string {
  return text
    .split("")
    .flatMap((ele) => {
      const code = ele.toLowerCase().charCodeAt(0);
      return code > 96 && code < 123 ? code - 96 : [];
    })
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
