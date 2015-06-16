/* Task description */
/*
	Write a function a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `string`
		3) it must throw an Error if any of the range params is missing
*/

function solve(from, to) {
	'use strict';

	if (!from || !to) {
		throw new Error('Some range params are missing (from, to)');
	}

	if (!isNumber(from) || !isNumber(to)) {
		throw new Error('Array contains a non-convertible to Number element');
	}

	return range(from, to).filter(isPrime);
}

function isPrime(number) {
	var start = 2;

	/** Bitwise Hacks:
	 *  So, Math.pow(2, 2) is === 2 << 1
	 *  Then, sqrt should be  === 2 >> 1
	 * */

	while (start <= (number >> 2)) {
		if (number % start++ < 1) {
			return false;
		}
	}

	return number > 1 && number !== 4;
}

// Generate array of consecutive numbers
// Actually, my fav is that one: http://stackoverflow.com/a/25166457/4483717
function range(start, count) {
	start = Number(start);
	count = Number(count) - start + 1;

	return Array
		.apply(0, Array(count))
		.map(function (element, index) {
			return index + start;
		});
}

function isNumber(item){
	return !(isNaN(item) || Number(item).toString() !== item.toString());
}

module.exports = solve;