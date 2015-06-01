'use strict';

/**
 * Problem 1. Numbers
 * Write a script that prints all the numbers from 1 to N.
 */
console.log('Problem 1: Numbers');

function printNumbersTo(n) {
    var step = n > 0 ? 1 : -1;
    var number = 1 - step;
    var results = [];

    while(number !== n){
        number += step;
        results.push(number);
    }

    console.log(`N = ${n}, Results: ${results.join(', ')}`); // ES6 template strings ^_^
}

printNumbersTo(10);
printNumbersTo(-10);

/**
 * Problem 2. Numbers not divisible
 * Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
 */
console.log('\n');
console.log('Problem 2: Numbers not divisible');

function notDivisibleTo(n) {
    const DIVISIBLE_NUMBER = 21;
    var number = 1;
    var notDivisibleNumbers = [];

    while (number <= n) {
        if(number % DIVISIBLE_NUMBER !== 0){
            notDivisibleNumbers.push(number);
        }

        number += 1;
    }

    console.log(`N = ${n}`);
    console.log(notDivisibleNumbers.join(', '));
}

notDivisibleTo(45);

/**
 * Problem 3. Min/Max of sequence
 * Write a script that finds the max and min number from a sequence of numbers.
 */
console.log('\n');
console.log('Problem 3: Min/Max of sequence');

var numbers = [42, -1, 90, 0, -Infinity];
sequenceMinAndMax(numbers);

function sequenceMinAndMax(sequence){
    console.log('Numbers', sequence);
    console.log('Min', findMin(numbers));
    console.log('Max', findMax(numbers));

    function findMin(n){
        return Math.min.apply(Math, n);
    }

    function findMax(n){
        return Math.max.apply(Math, n);
    }
}

/**
 * Problem 4. Lexicographically smallest
 * Write a script that finds the lexicographically smallest
 * and largest property in document, window and navigator objects.
 */
console.log('\n');
console.log('Problem 4: Lexicographically smallest');

function lexSorting(object){
    var keys = [], key;
    var firstProperty, lastProperty;
    var sortedProperties = [];

    // For some reason, Object.keys(document) returns only ['location']
    for(key in object){
        keys.push(key);
    }

    // ES6 Fat arrow functions :) - supported in Firefox only. Uncomment to try this!
    // sortedProperties = keys.map(prop => prop.toLowerCase()).sort();

    sortedProperties = keys
        .map(function (prop) {
            return prop.toLowerCase();
        }).sort();

    firstProperty = sortedProperties[0];
    lastProperty  = sortedProperties.slice(-1).pop();

    return [firstProperty, lastProperty].join(' - ');
}

console.log('Document:', lexSorting(document));
console.log('Window:',   lexSorting(window));
console.log('Navigator:',lexSorting(navigator));