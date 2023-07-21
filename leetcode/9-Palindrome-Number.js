/* Given an integer x, return true if x is a palindrome and false otherwise */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let intgetStr = x.toString();

  let reversedStr = intgetStr.split("").reverse().join("");
  return intgetStr === reversedStr;
};

/* 
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/
