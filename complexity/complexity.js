const arr1 = [1, 2, 5, 7, 9];
const arr2 = [2, 3, 5, 7, 8, 11, 15];

/*
 * Find common items between two arrays
 * in O(n^2) complexity
 */
function findCommonItems(arr1, arr2) {
  let commonItems = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonItems.push(arr1[i]);
      }
    }
  }
  return commonItems;
}

/**
 * Implement findCommonItems in O(n) complexity
 */
function fasterFindCommonItems(arr1, arr2) {
  throw new Error("Not implemented");
}

console.log(findCommonItems(arr1, arr2));
console.log(fasterFindCommonItems(arr1, arr2));