// Cases
// 120 => 120
// 1530 => 1_530
// 120510650 => 120,510_650
// 510650480910 => 510,650,480_910
// 12069057014032 => 12,069,057,014_032

function AddCommasAndUnderscore(num: number): string {
  let arr = num.toLocaleString().split("");
  arr[arr.lastIndexOf(",")] = "_";
  return arr.join("");
}

console.log(AddCommasAndUnderscore(120));
console.log(AddCommasAndUnderscore(1530));
console.log(AddCommasAndUnderscore(120510650));
console.log(AddCommasAndUnderscore(510650480910));
console.log(AddCommasAndUnderscore(12069057014032));
