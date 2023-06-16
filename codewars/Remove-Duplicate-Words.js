const removeConsecutiveDuplicates = (str) => {
  return str
    .split(" ")
    .filter((word, i) => word !== str.split(" ")[i + 1])
    .join(" ");
};

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
