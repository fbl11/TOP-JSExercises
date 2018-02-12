var palindromes = function(string) {
  let text = string.replace(/\W/g,"").toLowerCase().split("");
  let i = 0;
  while (i <= (text.length/2 - 1)) {
    if (text[i] == text[text.length - (i+1)]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = palindromes
