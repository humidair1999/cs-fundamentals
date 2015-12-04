function flattenArrayOfArrays(arr, recursedArr){
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

console.log(flattenArrayOfArrays([1, 2, 3, [4, 5, ['hello', 'hi']], ['whatever']]));