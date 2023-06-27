/* Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly. */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  let num1num = num1.replace('"', "");
  let num2num = num2.replace('"', "");
  let product = BigInt(num1num) * BigInt(num2num);
  let productString = product.toString();
  return productString;
};

/* Input: (num1 = "2"), (num2 = "3");
Output: "6"; */
