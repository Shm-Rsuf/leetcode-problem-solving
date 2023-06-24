/* Given two positive integers a and b, return the number of common factors of a and b.
An integer x is a common factor of a and b if x divides both a and b. */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let result = 0;
  let len = Math.min(a, b);
  for (let i = 1; i <= len; i++) {
    if (a % i === 0 && b % i === 0) {
      result++;
    }
  }
  return result;
};

/* Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6. */
