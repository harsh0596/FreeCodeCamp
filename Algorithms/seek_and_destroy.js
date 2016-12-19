/*
  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  var arg = arguments;
  
  var filtered = arr.filter(function(val) {
    for (var i=1; i<arg.length; i++) {
      if (val == arg[i])
        return false;
    }
    return true;
  });
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
