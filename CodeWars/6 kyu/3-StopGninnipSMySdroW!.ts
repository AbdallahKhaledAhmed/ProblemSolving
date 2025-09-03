export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((ele) => (ele.length > 4 ? ele.split("").reverse().join("") : ele))
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
