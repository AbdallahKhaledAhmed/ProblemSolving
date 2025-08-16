// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// This is My Solution

export function switchItUp(intNumber: number): string {
  const stringNums = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return stringNums[intNumber as keyof typeof stringNums] || "Zero";
}

console.log(switchItUp(0));
console.log(switchItUp(3));
console.log(switchItUp(6));
console.log(switchItUp(8));
console.log(switchItUp(15));
