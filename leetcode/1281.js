/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let add = n
    .toString()
    .split("")
    .reduce((preV, curr) => +preV + +curr, 0);

  let mul = n
    .toString()
    .split("")
    .reduce((preV, curr) => +preV * +curr, 1);
  return mul - add;
};

// console.log(subtractProductAndSum(234));

/* Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15 */
