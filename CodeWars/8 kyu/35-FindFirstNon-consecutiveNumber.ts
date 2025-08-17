// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// This is My Solution

export function firstNonConsecutive(arr: number[]): number | null {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

// Other Good Solution (Not My Idea)
export function firstNonConsecutive1(arr: number[]): number | null {
  return arr.find((ele, ind) => ele !== arr[ind - 1] + 1) ?? null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive1([1, 2, 3, 4, 6, 7, 8]));
