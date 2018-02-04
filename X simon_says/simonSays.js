function echo (text) {
  return text;
}

function shout (text) {
  return text.toUpperCase();
}

function repeat (text, times) {
  let input = [];
  let reps = (times > 2) ? times : 2;

  for (i =1; i <= reps; i++) {
    input.push(text);
  }
  return input.join(' ');
}

function pieceOfWord(word, pos) {
  return word.slice(0, pos);
}

function firstWord(string) {
  let words = string.split(' ');
  return words[0].toString();
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(title) {
  var titleWords = title.split(' ');
  var smallWords = ["and", "the", "over", "at", "but", "or", "nor", "for", "a", "an", "some", "with", "to"];

  return titleWords.map((word, i) => !smallWords.includes(word) ||  i === 0 || i === titleWords.length -1 ? capitalize(word) : word).join(' ');
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
