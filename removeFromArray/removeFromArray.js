var removeFromArray = function(...args) {
  let array = arguments[0];
  return array.filter(number => !args.includes(number));
}

module.exports = removeFromArray
