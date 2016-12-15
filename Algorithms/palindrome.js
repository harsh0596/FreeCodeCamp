/*
  Return true if the given string is a palindrome. Otherwise, return false.

  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

  Note
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {  
  var retStr = str;
  retStr = retStr.toLowerCase();
  retStr = retStr.replace(/[^a-z0-9]/g, '');
  
  if (retStr.length == 1 || retStr.length === 0)
    return true;
  
  var j=retStr.length-1;
  for (var i=0; i<retStr.length/2; i++) {
    if (retStr[i] != retStr[j])
      return false;
    j--;
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama");
palindrome("five|\_/|four");
palindrome("not a palindrome");
palindrome("My age is 0, 0 si ega ym.");