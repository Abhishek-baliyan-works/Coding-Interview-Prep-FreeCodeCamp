"use strict";

/**
 * To check my answer or solve yourself or see full problem go this site https://www.hackerrank.com/challenges/simple-array-sum/problem
 * Simple Description :-
 * Given an array of integers, find the sum of its elements.
 * For example, if the array ar = [1,2,3], 1+2+3 = 6, so return 6.
 *
 */

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
	/*
	 * Write your code here.
	 */
	let len = ar.length;
	let total = 0;
	for (let i = 0; i < len; i++) {
		total += ar[i];
	}
	return total;
}

// Extra stuff

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
	inputString += inputStdin;
});

process.stdin.on("end", _ => {
	inputString = inputString
		.trim()
		.split("\n")
		.map(str => str.trim());

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arCount = parseInt(readLine(), 10);

	const ar = readLine()
		.split(" ")
		.map(arTemp => parseInt(arTemp, 10));

	let result = simpleArraySum(ar);

	ws.write(result + "\n");

	ws.end();
}
