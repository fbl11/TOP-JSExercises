// alternative one: Creates all fibonacci numbers between 1 and num, and retains full array
// var fibonacci = function(num) {
  // var fibNum = [1, 1];
  // i = 2;

  // if (num < 0) {
    // return "OOPS";
  // } else {
    // while (i < num) {
    // fibNum.push(fibNum[fibNum.length - 1] + fibNum[fibNum.length - 2]);
    // i++;
    // }
  // }
  // return(fibNum[fibNum.length - 1]);
// };

//alternative two: never retains more than three elements within array - current element, previous element, current element + previous element
var fibonacci = function(num) {
  var fibNum = [1, 1];
  i = 2;

  if (num < 0) {
    return "OOPS";
  } else {
    while (i < num) {
    fibNum.unshift(fibNum[0] + fibNum[1]);
    fibNum.pop();
    i++;
    }
  }
  return(fibNum[0]);
};

module.exports = fibonacci
