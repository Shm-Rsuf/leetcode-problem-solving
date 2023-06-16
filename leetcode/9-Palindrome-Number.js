/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let intgetStr = x.toString();

  let reversedStr = intgetStr.split("").reverse().join("");
  return intgetStr === reversedStr;
};
