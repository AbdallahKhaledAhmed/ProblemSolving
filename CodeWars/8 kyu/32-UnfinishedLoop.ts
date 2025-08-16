// https://www.codewars.com/kata/55c28f7304e3eaebef0000da
// This is My Solution

function createArray(number: number): number[] {
  const newArray: number[] = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

console.log(createArray(10));
