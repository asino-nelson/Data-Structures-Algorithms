console.log("Example 1");
function nLogN(n) {
  let y = n;
  while (n > 1) {
    n = Math.floor(n / 2); // O(log n)
    for (let i = 1; i < y; i++) {
      // O(n)
      console.log(i);
    }
  }
}

nLogN(4); // O(n log n)

console.log("Example 2");
// APPLICATION
// Merge Sort

function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);

  return merge(MergeSort(leftArr), MergeSort(rightArr));
}

console.log(MergeSort([3, 12, 16, 1, 6, 5, 100, 13]));
