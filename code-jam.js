'use strict';

const fs = require('fs');

class Input {
  constructor(input) {
    this.input = input;
  }

  readLine() {
    const index = this.input.indexOf('\n');
    const line = this.input.substr(0, index);
    this.input = this.input.substr(index + 1);
    return line;
  }

  readWord() {
    const result = /(\S+)\s*/.exec(this.input);
    if (result) {
      this.input = this.input.substr(result[0].length);
      return result[1];
    }
  }

  readNumber() {
    return +this.readWord();
  }

  readN(n, f) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(f.call(this, this));
    }
    return res;
  }

  readLines(n) {
    return this.readN(n, this.readLine);
  }

  readWords(n) {
    return this.readN(n, this.readWord);
  }

  readNumbers(n) {
    return this.readN(n, this.readNumber);
  }
}

function outputSolutions(input, solution, options) {
  const caseOutputNewline = options && options.caseOutputNewline;
  input = new Input(input);
  const T = +input.readLine();

  let output = '';

  for (let t = 1; t <= T; t++) {
    output += `Case #${t}:${caseOutputNewline ? '\n' : ' '}${solution(input)}\n`;
  }

  console.log(output);
  return output;
}

function solve(options, solution) {
  if (!solution) {
    solution = options;
    options = undefined;
  }
  const inputFile = process.argv[2];
  if (inputFile) {
    // From file
    fs.readFile(inputFile, 'utf8', (err, input) => {
      if (err) throw err;

      const output = outputSolutions(input, solution, options);
      if (inputFile) {
        const outputFile = inputFile.replace('.in', '.out');
        fs.writeFile(outputFile, output, (err) => {
          if (err) throw err;
        });
      }
    });
  }
  else {
    // From stdin
    let input = '';
    process.stdin.resume();
    process.stdin.on('data', chunk => input += chunk);
    process.stdin.on('end', () => outputSolutions(input, solution, options));
  }
};

module.exports = {solve};
