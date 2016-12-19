/*
	Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var retArr = [];
  var arrLength = arr.length;
  
  for (var i=0; i<arrLength; i += size) {
    retArr.push(arr.slice(i, i+size));
  }
 
  return retArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);