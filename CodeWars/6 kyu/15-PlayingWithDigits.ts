// https://www.codewars.com/kata/5552101f47fc5178b1000050
// This is My Solution

export class G964 {
  public static digPow = (n: number, p: number) => {
    const k =
      n
        .toString()
        .split("")
        .reduce((t, c, ind) => t + (+c) ** (ind + p), 0) / n;
    return Number.isInteger(k) ? k : -1;
  };
}

console.log(G964.digPow(89, 1));
console.log(G964.digPow(695, 2));
