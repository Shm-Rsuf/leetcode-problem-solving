/* Given an integer array nums, find three numbers whose product is maximum and return the maximum product. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let len = nums.length;
  let max1 = nums[len - 1] * nums[len - 2] * nums[len - 3];

  let max2 = nums[0] * nums[1] * nums[nums.length - 1];
  return Math.max(max1, max2);
};
console.log(maximumProduct([-1, -2, -3, -4]));
/* Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24 */
