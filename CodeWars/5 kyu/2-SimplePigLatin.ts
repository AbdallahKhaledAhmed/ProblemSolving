// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// This is My Solution

export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((ele) =>
      ele.match(/\p{P}/gu) || ele.trim() === ""
        ? ele
        : ele.split("").slice(1).join("") + (ele.charAt(0) + "ay")
    )
    .join(" ");
};

// igPay atinlay siay oolcay
console.log(pigIt("Pig latin is cool"));
// elloHay orldway !)
console.log(pigIt("Hello world !"));
