// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// This is My Solution

export function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}

// other solution without using built in functions "this is my solution too"
function repeat_Str(n: number, s: string): string {
  let repeatedString: string = "";
  for (let i = 0; i < n; i++) {
    repeatedString += s;
  }
  return repeatedString;
}

console.log(repeatStr(2, "hello"));
console.log(repeat_Str(3, "hello"));
