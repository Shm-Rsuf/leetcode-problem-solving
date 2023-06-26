/* Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array. */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  let res = 100;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res = Math.min(res, nums1[i]);
      } else {
        res = Math.min(res, nums1[i] * 10 + nums2[j], nums2[j] * 10 + nums1[i]);
      }
    }
  }
  return res;
};

/* Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have. */
