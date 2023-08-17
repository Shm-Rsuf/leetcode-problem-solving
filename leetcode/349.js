/* 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

var intersect = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let res = [];

  for (let value of set1) {
    if (set2.has(value)) {
      res.push(value);
    }
  }
  return res;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

/*
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted. */
