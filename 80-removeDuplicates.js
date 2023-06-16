/* Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

function removeDuplicates(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let i = 2;

  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

/* Input: nums = [1, 1, 1, 2, 2, 3];
Output: 5, (nums = [1, 1, 2, 2, 3, _]); */
