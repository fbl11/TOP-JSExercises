var splitCamelCase = function(word) {
  if (word.match(/^[a-z]/)) {
    return word.split(/(?=[A-Z])/).join("_");
  } else {
    return word;
  }
};

var snakeCase = function(string) {
  var result = string
    .split(/[^A-Za-z]+/g)
    .filter(word => word.length > 0)
    .map(word => splitCamelCase(word))//.map(splitCamelCase)
    .join("_")
    .toLowerCase();
  console.log(result);
};

//alternative
var snakeCase = function(string) {
  var result = string
    .split(/[^A-Za-z]+/g)
    .filter(word => word.length > 0)
    .map(word => word.match(/^[a-z]/) ? word.split(/(?=[A-Z])/).join("_") : word)
    .join("_")
    .toLowerCase();
  console.log(result);
};

snakeCase('Hello, World');
snakeCase('Hello, World???');
snakeCase('This is the song that never ends....');
snakeCase('snakeCase');
snakeCase('snake-case');
snakeCase('SnAkE,..CaSe..Is..AwEsOmE');


//return string.replace(/-/g," ").replace(/[^\w\s]/g,"").split(/\s|(?=[A-Z])/g).join("_").toLowerCase();

//separate individual words
//option 1: define all possible separators
//option 2: use single/few separator/w and replace separator-characters with that
//ignore punctuation
//option 1: before separation
//option 2: after separation
