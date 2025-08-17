// https://www.codewars.com/kata/568d0dd208ee69389d000016
// This is My Solution

export function rentalCarCost(d: number): number {
  const priceToPay: number = d * 40;
  return d >= 7 ? priceToPay - 50 : d >= 3 ? priceToPay - 20 : priceToPay;
}

console.log("$" + rentalCarCost(1));
console.log("$" + rentalCarCost(3));
console.log("$" + rentalCarCost(7));
console.log("$" + rentalCarCost(10));
