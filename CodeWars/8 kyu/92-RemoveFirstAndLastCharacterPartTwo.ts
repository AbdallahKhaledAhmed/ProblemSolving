// https://www.codewars.com/kata/570597e258b58f6edc00230d
// This is My Solution

function array(string: string): string | null {
  return string.split(",").length < 3
    ? null
    : string.split(",").slice(1, -1).join(",");
}

// Other Solution
function array1(string: string): string | null {
  return string.split(",").slice(1, -1).join(",") || null;
}

console.log(array("1,2,3,4,5"));
console.log(array1("1,2,3,4,5"));
