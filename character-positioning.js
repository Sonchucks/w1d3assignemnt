function countLetters(string) {
  var inputedString = string.split(' ').join('').toLowerCase();
  var output = {};

  for (var i = 0; i < inputedString.length; i++) {
    var character = inputedString.charAt(i);
    var current = output[character];

    if (current === undefined) {
      output[character] = [i];
    } else {
      output[character].push(i);
    }
  }

  return output;

}

console.log(countLetters('lighthouse in the house'));