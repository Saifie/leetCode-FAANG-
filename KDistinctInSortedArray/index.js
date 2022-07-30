function swaper(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function pivot(arr, left, right) {
  let pivotValue = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivotValue) {
      swaper(arr, i, j);
      i++;
    }
  }
  swaper(arr, i, right);
  return i;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let returnPivot = pivot(arr, left, right);
    quickSort(arr, returnPivot + 1, right);
    quickSort(arr, left, returnPivot - 1);
  }
  return arr;
}
// function pivot(arr, pivotIndex, end) {
//   let swap = pivotIndex;
//   for (let i = pivotIndex + 1; i <= end; i++) {
//     if (arr[pivotIndex] > arr[i]) {
//       swap = swap + 1;
//       swaper(arr, swap, i);
//     }
//   }
//   swaper(arr, pivotIndex, swap);
//   return swap;
// }

// function quickSort(arr, left, right) {
//   let pivoto = pivot(arr, left, right);
//   if (left < right) {
//     quickSort(arr, pivoto + 1, right);
//     quickSort(arr, left, pivoto - 1);
//   }

//   return arr;
// }
function quickHelper(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

console.log(quickHelper([4, 6, 1, 7, 3, 2]));
