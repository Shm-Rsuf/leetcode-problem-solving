function descendingOrder(n) {
  let str = n.toString();
  let newArr = str.split("");
  let sortArr = newArr.sort();
  let reverse = sortArr.reverse();
  let joinArr = reverse.join("");
  let backNum = Number(joinArr);
  return backNum;
}

console.log(descendingOrder(12345));
