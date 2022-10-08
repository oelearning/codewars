# Square every digit

### Instructions:

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

**Note:** The function accepts an integer and returns an integer

### Pseudocode:

1. Assure that num is a number
2. Convert num to string to use split method
3. Split the string
4. Iterate the array of strings
   1. Convert each element to a number
   2. Multiply the element by itself
   3. Convert each element to a string to use join mothod
5. Join the strings
6. Convert to a number
7. Return the result
