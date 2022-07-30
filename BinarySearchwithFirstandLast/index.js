function binarySearch(l, r, arr, target) {
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

function findFirstAndLast(arr, target) {
  if (arr.length === 0) return [-1, -1];
  let value = binarySearch(0, arr.length - 1, arr, target);
  if (value === -1) return [-1, -1];
  let start = value;
  let end = start;
  let tempS;
  let tempE;
  while (start !== -1) {
    tempS = start;
    start = binarySearch(0, start - 1, arr, target);
  }
  start = tempS;
  while (end !== -1) {
    tempE = end;
    end = binarySearch(end + 1, arr.length - 1, arr, target);
  }
  end = tempE;

  return [start, end];
}

console.log(findFirstAndLast([2, 3, 4, 5, 5, 5, 6, 7], 5));
