/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(items) {
	'use strict';

	if (!items) {
		throw new Error('Parameter is not passed');
	}

	if (items.length < 1) {
		return null;
	}

	if (!items.every(isNumber)) {
		throw new Error('Array contains a non-convertible to Number element');
	}

	return items
		.map(Number)
		.reduce(function (a, b) {
			return a + b;
		});
}


/**
 * --- ES6 basic solution ---
 *     You can open it in Firefox or with iojs (using --harmony_arrow_functions flag) **/
// var sum = (n) => n.map(Number).reduce((a, b) => a + b); // <3

/** --- Helper functions --- **/

function isNumber(item) {
	return !(isNaN(item) || Number(item).toString() !== item.toString());
}

module.exports = sum;