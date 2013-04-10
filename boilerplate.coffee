'use strict'
fs = require 'fs'
input = ''
inputFile = process.argv[2]

class Input
	constructor: (input, readType) ->
		separator = switch split
			when 'words' then /\s+/
			when 'lines' then '\n'

		@text = input.split separator

	read: ->
		do @text.shift

	readInt: ->
		parseInt @read(), 10

	readFloat: ->
		parseFloat @read()


# Get input
if inputFile?
	# From file
	fs.readFile inputFile, 'utf8', (err, data) ->
		if err
			throw err
		do run

else
	# From stdin
	do process.stdin.resume
	process.stdin.on 'data', (chunk) ->
		input += chunk

	process.stdin.on 'end', ->
		do run

run = ->
	output = ''
	input = new Input input, 'words'
	T = input.readInt()
	results = []
	for t in [1..T]

		# Set up variables
		N = input.readInt()

		# Add to results set
		results.push (solve N)

	results.forEach (result, index) ->
		output += "Case ##{index + 1}: #{result}\n"

	# Output to stdout
	console.log output

	# Output to file
	if inputFile?
		outputFile = inputFile.replace '.in', '.out'

		fs.writeFile outputFile, output, (err) ->
			if (err)
				throw err



solve = (N) ->
