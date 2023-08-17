/* 
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let uniqueArr = [...new Set(nums)].sort((a, b) => b - a);
  console.log(uniqueArr);
  if (uniqueArr[2] || uniqueArr[2] === 0) {
    return uniqueArr[2];
  } else {
    return uniqueArr[0];
  }
};

console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
