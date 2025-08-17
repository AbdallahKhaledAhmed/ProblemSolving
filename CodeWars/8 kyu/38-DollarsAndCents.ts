// https://www.codewars.com/kata/55902c5eaa8069a5b4000083
// This is My Solution

function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(1.5));
console.log(formatMoney(1.2));
