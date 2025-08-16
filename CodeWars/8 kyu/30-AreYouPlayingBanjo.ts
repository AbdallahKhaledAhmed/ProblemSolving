// https://www.codewars.com/kata/53af2b8861023f1d88000832
// This is My Solution

export function areYouPlayingBanjo(name: string): string {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Abdo"));
console.log(areYouPlayingBanjo("Ramadan"));
