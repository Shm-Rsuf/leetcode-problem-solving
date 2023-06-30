var intersect = function (nums1, nums2) {
  let res = [];
  for (var i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      res.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }
  return res;
};

/* Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted. */
