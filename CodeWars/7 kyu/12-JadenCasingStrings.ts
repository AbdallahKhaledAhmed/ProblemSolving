// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// This is My Solution

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
