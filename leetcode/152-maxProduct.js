/* Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums = []) => {
  if (nums.length === 0) {
    return 0;
  }
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const currentMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
    const currentMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
    prevMax = currentMax;
    prevMin = currentMin;
    if (prevMax > max) {
      max = prevMax;
    }
  }
  return max;
};
console.log(maxProduct([2, 3, -2, 4]));
/* Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6. */
