# Exercise XX - fibonacci

Create a function that returns a specific member of the fibonacci sequence:

> a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```


create array containing fibonacci numbers up to position of 'specific number'
	add current number to previous number
	if no previous number add to itself
	add new number to the end of the array

return specific number
	array lookup +1

negative number input returns "oops"
	check if number negative, if yes, return oops, if no follow above

accept strings
	take string and convert to number
