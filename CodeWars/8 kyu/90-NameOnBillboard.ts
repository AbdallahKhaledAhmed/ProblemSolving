// https://www.codewars.com/kata/570e8ec4127ad143660001fd
// This is My Solution

export function billboard(name: string, price: number = 30): number {
  return name.split("").reduce((total) => total + price, 0);
}

console.log(billboard("Abdallah"));
