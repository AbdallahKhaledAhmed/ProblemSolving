// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
// This is My Solution

function firstNonRepeatingLetter(s: string) {
  const upperS = s.toUpperCase();
  const lowerS = s.toLowerCase();
  for (let char of s.split("")) {
    if (
      upperS.indexOf(char.toUpperCase()) ===
        upperS.lastIndexOf(char.toUpperCase()) ||
      lowerS.indexOf(char.toLowerCase()) ===
        lowerS.lastIndexOf(char.toLowerCase())
    ) {
      return char;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("stress"));
