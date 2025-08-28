// https://www.codewars.com/kata/5267faf57526ea542e0007fb
// This is My Solution

Math.round = function (number) {
  return +number.toFixed(); // TODO: fix this
};

Math.ceil = function (number) {
  return Number.isInteger(number) ? number : parseInt(number.toString()) + 1; // TODO: fix this
};

Math.floor = function (number) {
  return Number.isInteger(number) ? number : parseInt(number.toString()); // TODO: fix this
};

console.log(Math.floor(1.1));
