function translate (sentence) {
  var originalWords = sentence.toLowerCase().split(' ');
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  function rebuild (word) {
	  while (!vowels.includes(word.charAt(0))) {
	    if (word.match(/\bqu/)) {
	      let restWord = word.substr(2);
	      let letter = word.substr(0, 2);
	      word = restWord + letter;
			} else {
			  let restWord = word.substr(1);
	      let letter = word.substr(0, 1);
	      word = restWord + letter;
			}
		}
		return word + 'ay';
  }
	return originalWords.map(rebuild).join(' ');
}




module.exports = {
	translate
}
