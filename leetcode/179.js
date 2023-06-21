/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let sorted = nums.sort((a, b) => {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    return ba - ab;
  });
  const joined = sorted.join("");
  if (parseInt(joined) === 0) {
    return "0";
  } else {
    return joined;
  }
};
console.log(largestNumber([10, 2]));
