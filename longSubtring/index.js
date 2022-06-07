function longSubtring(str) {
  let length = 0;
  let store = {};
  let leftPointer = 0;

  for (var right = 0; right < str.length; right++) {
    console.log({ length });
    if (store[str[right]] >= leftPointer) {
      console.log({ right, leftPointer });

      leftPointer = store[str[right]] + 1;
    }
    store[str[right]] = right;
    length = Math.max(length, right - leftPointer + 1);
  }

  return length;
}

console.log(longSubtring("abcbdaac"));

// function longSubtring(str) {
//   let count = 0;

//   for (var i = 0; i < str.length; i++) {
//     let store = {};
//     let max = 0;

//     for (var j = i; j < str.length; j++) {
//       let currElement = str[j];
//       if (!store[currElement]) {
//         store[currElement] = true;
//         max++;
//         count = Math.max(max, count);
//       } else {
//         break;
//       }
//     }
//   }
//   return count;
// }

// console.log(longSubtring("abcbda"));

// abcbda

// function longSubtring(str) {
//     let count = 0;
//     let pointer1 = 0;
//     let pointer2 = str.length - 1;
//     for (var i = 0; i < str.length; i++) {
//       let substring = str.substring(i, str.length);
//       let store = [];
//       let max = 0;
//       for (var j = 0; j < substring.length; j++) {
//         if (store.includes(substring[j])) {
//           break;
//         } else {
//           store.push(substring[j]);
//           max++;
//         }
//       }
//       count = Math.max(max, count);
//     }
//     return count;
//   }

//   console.log(longSubtring("abccabb"));

// abcbda

// abcbda

// function longSubtring(str) {
//     let count = 0;
//     let pointer1 = 0;
//     let pointer2 = str.length - 1;
//     for (var i = 0; i < str.length; i++) {
//       let substring = str.substring(i, str.length);
//       let store = [];
//       let max = 0;
//       for (var j = 0; j < substring.length; j++) {
//         if (store.includes(substring[j])) {
//           break;
//         } else {
//           store.push(substring[j]);
//           max++;
//         }
//       }
//       count = Math.max(max, count);
//     }
//     return count;
//   }

//   console.log(longSubtring("abccabb"));

// abcbda
