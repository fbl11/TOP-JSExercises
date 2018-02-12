# Exercise XX - palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.
  - A car, a man, a maraca.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

to do:
take string
  split string into array with letters as values
  remove special characters / punctuation / numbers (reg ex)
  use same case for all values
compare first letter to last letter, second letter to second to last letter etc
if not identical - not palindrome -> exit 'not palindrome'
if identical, continue to next letter until all letters have been compared with their counterparts
exit 'is palindrome'





