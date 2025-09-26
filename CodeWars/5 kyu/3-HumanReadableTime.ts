// https://www.codewars.com/kata/52685f7382004e774f0001f7
// This is My Solution

const addZeros = (num: number) =>num.toString().length === 0? "00": num.toString().length < 2? "0" + num: num.toString();
export function humanReadable(seconds: number) {
  const secs = seconds % 60;
  const mins = ((seconds - secs) / 60) % 60;
  const hours = (seconds - secs - mins * 60) / 60 / 60;
  return `${addZeros(hours)}:${addZeros(mins)}:${addZeros(secs)}`;
}

console.log(humanReadable(359999));
