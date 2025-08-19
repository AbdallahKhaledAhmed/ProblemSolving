// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// This is My Solution

export function setAlarm(employed: boolean, vacation: boolean) {
  return employed && !vacation;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
