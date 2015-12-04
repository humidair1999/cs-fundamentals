// http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript

var flattenArrayOfArrays = function(arr, recursedArr) {
  if (!recursedArr) {
    recursedArr = [];
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flattenArrayOfArrays(arr[i], recursedArr);
    }
    else {
      recursedArr.push(arr[i]);
    }
  }

  return recursedArr;
}

// function flatten(arr) {

//   var temp = [];

//   function recursiveFlatten(arr) {
//     for(var i = 0; i < arr.length; i++) {
//       if(Array.isArray(arr[i])) {
//         recursiveFlatten(arr[i]);
//       } else {
//         temp.push(arr[i]);
//       }
//     }
//   }
//   recursiveFlatten(arr);
//   return temp;
// }

console.log(flattenArrayOfArrays([1, 2, 3, [4, 5, ['hello', 'hi']], ['whatever']]));