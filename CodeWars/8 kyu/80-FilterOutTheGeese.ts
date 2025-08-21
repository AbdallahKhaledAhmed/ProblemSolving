// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
// This is My Solution

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((ele) => !geese.includes(ele));
}

// test
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
