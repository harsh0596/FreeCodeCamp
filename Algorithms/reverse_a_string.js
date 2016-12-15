
function reverseString(str) {
  var x = str.split('');
  x = x.reverse();
  x = x.join('');
  return x;
}

reverseString("hello");
