/* Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python. */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (number) {
  if (number == 0 || number == 1) return number;

  let start = 0;
  let end = number;

  while (start <= end) {
    let mid = (start + end) / 2;

    mid = Math.floor(mid);

    if (mid * mid == number) {
      return mid;
    }

    if (mid * mid < number) {
      start = mid + 1;
      res = mid;
    } else {
      end = mid - 1;
    }
  }

  return res;
};

/* Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned. */
