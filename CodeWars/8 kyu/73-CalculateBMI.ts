// https://www.codewars.com/kata/57a429e253ba3381850000fb
// This is My Solution

export function bmi(weight: number, height: number): string {
  const BMI = weight / Math.pow(height, 2);
  return BMI <= 18.5
    ? "Underweight"
    : BMI <= 25
    ? "Normal"
    : BMI <= 30
    ? "Overweight"
    : "Obese";
}

console.log(bmi(50, 1.8));
console.log(bmi(85, 1.84));
