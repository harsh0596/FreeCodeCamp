/*
	Remove all falsy values from an array.
	
	Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(function(val) {
    if (!val)
      return false;
    else
      return true;
  });
  return filtered;
}

bouncer([false, null, 0, NaN, undefined, ""]);