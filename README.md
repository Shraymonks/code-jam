# JavaScript Code Jam Boilerplate
A simple boilerplate to provide a good basis for starting Code Jam problems.
All that is necessary is to implement two functions: ```parse``` and ```solve```.

## parse
Fill in the parse function to parse the input for a single test case.
Returns an array of arguments that are used for your solve function.

### Input Consumption Methods
- ```input.readLine()``` Consumes until next ```\n``` character
- ```input.readWord()``` Consumes until next whitespace character
- ```input.readInt([radix])``` Calls parseInt on ```input.readWord``` ```radix``` defaults to ```10```
- ```input.readFloat()``` Calls parseFloat on ```input.readWord```
- ```input.readLines(n)```, ```input.readWords(n)```, ```input.readInts(n, [radix])```, ```input.readFloats(n)``` helper methods to return an array containing the input from the respective method repeated ```n``` times

## solve
Implement this function to solve a single test case.
It should return the output to be displayed in the case output.

## Running the script
```javascript
node boilerplate.js [a.in]
```
If an input file ```a.in``` is provided, an output file ```a.out``` will be saved in the same directory.

Otherwise, input will be captured until an EOF character.
