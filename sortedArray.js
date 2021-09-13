function sortedSquaredArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(Math.pow(array[i], 2));
    newArray.sort((a, b) => a - b);
  }
  return newArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
