var caesar = function(string, shiftNum) {
  var originalLetters = string.split('');
  return originalLetters.map(letter => shift(letter,shiftNum)).join('');
};

function shift(letter, num){
  if (letter.match(/[^A-Za-z]/)) {
    return letter;
  }

  var offset = letter.match(/[A-Z]/) ? 65 : 97;
  var code = letter.charCodeAt(0);
  var shift = num > 0 ? num : num % 26 + 26;

  return String.fromCharCode(((code - offset + shift) % 26) + offset);

}

module.exports = caesar
