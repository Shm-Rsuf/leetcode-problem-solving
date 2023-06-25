/* Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
Return an integer denoting the sum of all numbers in the given range satisfying the constraint. */
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 || i % 5 === 0 || i % 7 === 0) {
      res += i;
    }
  }
  return res;
};

/* Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21. */
