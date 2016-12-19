/*
	Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

	Note that inserting the three dots to the end will add to the string length.

	However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr = "";
  if (num <= 3) {
    newStr = str.slice(0, num);
    newStr = newStr + "...";
  }

  else if (num >= str.length) {
    newStr = str;
  }
  
  else {
    newStr = str.slice(0, num-3);
    newStr = newStr + "...";
  }
  
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
