/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let res = 0;
  let value = num;
  while (value !== 0) {
    if (num % (value % 10) === 0) {
      res++;
    }
    value = Math.floor(value / 10);
  }
  return res;
};

console.log(countDigits(7));
