/* Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    if (nums[i] <= 0) {
      min++;
    } else {
      max++;
    }
  }
  return Math.max(max, min);
};

/* Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3. */
