//
// This is My Solution

export function countBy(x: number, n: number) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(2, 5));
