// https://www.codewars.com/kata/55c45be3b2079eccff00010f
// This is My Solution

export function order(words: string) {
  return words
    .split(" ")
    .sort((a, b) => {
      console.log(+a.match(/[0-9]/g)![0]);
      return +a.match(/[0-9]/)![0] - +b.match(/[0-9]/)![0];
    })
    .join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
