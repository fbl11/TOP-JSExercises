// var sumAll = function(num1, num2) {
//   for (i = num1; i < num2; i++) {
//
//   }
// }

var sumAll = function (num1, num2) {
  var lowerNumber = num1 <= num2 ? num1 : num2;
  var higerNumber = num1 < num2 ? num2 : num1;
  var result = 0;

  if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR';
  } else {
    for (i = lowerNumber; i <= higerNumber; i++) {
      result += i;
    }
  }
  return result;
}



module.exports = sumAll
