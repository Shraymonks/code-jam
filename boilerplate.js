'use strict';

// Use this to parse arguments for solve
var parse = function (input) {
	var N = input.readInt();

	return [N];
};

// Solution Implementation
var solve = function (N) {
	
};


// Boilerplate
var fs = require('fs');
var inputFile = process.argv[2];

function Input(input) {
	this.input = input;
}

var run = function (input) {
	input = new Input(input);
	var T = input.readInt();

	var output = '';

	for (var t = 1; t <= T; t++) {
		output += 'Case #' + t + ': ' + solve.apply(null, parse(input)) + '\n';
	}

	console.log(output);

	if (inputFile) {
		var outputFile = inputFile.replace('.in', '.out');
		fs.writeFile(outputFile, output, function (err) {
			if (err) throw err;
		});
	}
};

Input.prototype = {
	readLine: function () {
		var index = this.input.indexOf('\n');
		var line = this.input.substring(0, index);
		this.input = this.input.substr(index + 1);
		return line;
	},
	readWord: function () {
		var re = /(\S+)\s*/;
		var result = re.exec(this.input);
		if (result) {
			this.input = this.input.substr(result[0].length);
			return result[1];
		}
	},
	readInt: function () {
		return parseInt(this.readWord(), 10);
	},
	readFloat: function () {
		return parseFloat(this.readWord());
	}
};


// Get input
if (inputFile) {
	// From file
	fs.readFile(inputFile, 'utf8', function (err, input) {
		if (err) throw err;
		run(input);
	});
}
else {
	// From stdin
	var input = '';
	process.stdin.resume();
	process.stdin.on('data', function (chunk) {
		input += chunk;
	});
	process.stdin.on('end', function () {
		run(input);
	});
}
