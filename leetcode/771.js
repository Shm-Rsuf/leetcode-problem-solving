/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const stonesArr = stones.split("");
  const jewelsArr = jewels.split("");
  let count = 0;
  for (let stone of stonesArr) {
    for (let i = 0; i < jewelsArr.length; i++) {
      if (stone.charCodeAt() === jewelsArr[i].charCodeAt()) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
/* 
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0
 */
