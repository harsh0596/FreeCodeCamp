function findLongestWord(str) {
  var arr = str.split(' ');
  var longestWordLength = 0;
  
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length > longestWordLength)
      longestWordLength = arr[i].length;
  }
  
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
