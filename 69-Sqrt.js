/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (number) {
  if (number == 0 || number == 1) return number;

  let start = 0;
  let end = number;

  while (start <= end) {
    let mid = (start + end) / 2;

    mid = Math.floor(mid);

    if (mid * mid == number) {
      return mid;
    }

    if (mid * mid < number) {
      start = mid + 1;
      res = mid;
    } else {
      end = mid - 1;
    }
  }

  return res;
};

console.log(mySqrt(8));
