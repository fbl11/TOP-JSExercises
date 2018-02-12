function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	return array.reduce((prev, curr) => prev + curr, 0);
}

function multiply (array) {
	return array.reduce((prev, curr) => prev * curr, 1);
}

function power (num1, num2) {
	// return Math.pow(num1, num2);
  var num = num1;
  i = 1;

  while (i < num2) {
    num *= num1;
    i++;
  }
  return num;
}


function factorial(num) {
	var result = 1;
	i = 1;

	while (i <= num) {
		result *= i;
		i++;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
