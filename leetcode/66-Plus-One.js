/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (store[store.length - 1] >= 9) {
    return String(store[store.length - 1])
      .split("")
      .map((a) => Number(a));
  }

  return store;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
