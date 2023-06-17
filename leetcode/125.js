/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let arr = s.split("");
  let result = [];

  let alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (const i of arr) {
    if (alphabet.includes(i.toLowerCase())) {
      result.push(i.toLowerCase());
    }
  }
  return result.join("") === result.reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

/* Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */
