/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let arr = [];
  for (let i = 0; i < strs.length; i++) {
    let wordArr = strs[i].split("").filter((letter) => letter !== "0");
    arr.push(wordArr.length);
  }
  return Math.max(...arr);
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));

/* Input: strs = ["alic3","bob","3","4","00000"]
Output: 5 

Input: strs = ["1","01","001","0001"]
Output: 1
*/
