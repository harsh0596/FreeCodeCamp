/*
	Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

	For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var retStr = str.split(' ');
  
  for (var i=0; i<retStr.length; i++) {
    retStr[i] = retStr[i].charAt(0).toUpperCase() + retStr[i].slice(1).toLowerCase();
  }
  
  retStr = retStr.join(' ');
  return retStr;
}

titleCase("I'm a little tea pot");
