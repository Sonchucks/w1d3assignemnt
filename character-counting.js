function countLetters(string) {
  var inputedString = string.split(' ').join('').toLowerCase('');
  var output = {};

  for (var i = 0; i < inputedString.length; i++) {
    output[inputedString[i]] = 0;
  }

  for (var j = 0; j < inputedString.length; j++) {
    output[inputedString[j]]++;
  }

  return output;

}

console.log(countLetters('lighthouse in the house'));