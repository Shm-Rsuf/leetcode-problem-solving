function majorityElement(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }

    if (map[arr[i]] >= arr.length / 2) {
      return arr[i];
    }
  }
}

console.log(majorityElement([3, 1, 2, 3]));
