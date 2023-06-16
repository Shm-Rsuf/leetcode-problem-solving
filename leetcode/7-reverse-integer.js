/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverseInt = parseInt(x.toString().split("").reverse().join(""));

  if (reverseInt > 2 ** 31) return 0;
  return reverseInt * Math.sign(x);
};

console.log(reverse(-123));
/* Input: x = 123;
Output: 321; */
