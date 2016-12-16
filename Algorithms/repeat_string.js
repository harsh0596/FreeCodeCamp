/*
	Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var retStr = "";
  if (num <= 0) {
    return "";
  }
  
  for (var i=0; i<num; i++) {
    retStr += str;
  }
  
  return retStr;
}

repeatStringNumTimes("abc", 3);
