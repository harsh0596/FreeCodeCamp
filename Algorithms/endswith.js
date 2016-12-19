/*
	Check if a string (first argument, str) ends with the given target string (second argument, target).

	This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
	But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ss = str.substring(str.length - target.length, str.length);
  
  if (ss == target)
    return true;
  else
    return false;
}

confirmEnding("He has to give me a new name", "name");
