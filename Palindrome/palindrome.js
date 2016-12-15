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