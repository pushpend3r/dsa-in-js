// https://leetcode.com/problems/reverse-integer/

function reverse(x: number): number {
  let result = 0;
  let tempX = Math.abs(x);

  while (tempX) {
    const remainder = tempX % 10;
    result = result * 10 + remainder;
    tempX = Math.floor(tempX / 10);
  }

  if (x < 0) {
    result = -result;
  }

  if (result < -2147483648 || result > 2147483647) return 0;
  return result;
}
