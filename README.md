# code-jam
A package for solving Code Jam problems in JavaScript

## Installation
```
npm install code-jam
```

## Usage
Check out `example.js` for an example solution.


Include `code-jam` in your solution:
```
const solve = require('code-jam').solve;
```

### `solve([options], solution)`
`code-jam` exports a `solve` function that you'll use to create your solution.

#### `options`
An optional object to specify output options:
- `caseOutputNewline: false` - Whether or not to print case results on a new line

#### `solution(input)`
A function you will implement to solve a Code Jam problem. It should return the output for a single test case.
See below on how to use `input`.

### Input Consumption Methods
- `input.readLine()` Consumes until the next `\n` character.
- `input.readWord()` Consumes until the next whitespace character.
- `input.readNumber()` Calls `input.readWord` and coerces to a number.
- `input.readLines(n)`, `input.readWords(n)`, `input.readNumbers(n)`
  Returns an array containing the input from repeating the respective method n times
- `input.readN(n, f)` Returns an array created from calling the function `f` n times.

## Running your solution
```
node yourSolution.js [a.in]
```
If an input file `a.in` is provided, an output file `a.out` will be saved in the same directory.

Otherwise, input will be captured from STDIN until an EOF character and then output will be printed to STDOUT.
