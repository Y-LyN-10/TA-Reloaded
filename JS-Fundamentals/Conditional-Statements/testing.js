'use strict';

// TDD yeah! Well...
// That is not the way the tests are written in JS usually,
// but it's most appropriate for that situation

test_exchangeIfGreater();
test_multiplicationSign();
test_biggestOfThree();
test_sortThreeNumbers();
test_digitAsWord();
test_quadraticEquation();

function assert (result, expected) {
    return result === expected ? 'OK' :
        `Expected: ${expected}, your result: ${result}`;
}

function test_exchangeIfGreater(){
    console.log('Problem 1: Exchange if greater');

    var test_values = [
    //  [a, b, expected]
        [5, 2, '2 5'],
        [3, 4, '3 4'],
        [5.5, 4.5, '4.5 5.5'],
        [10, -10, '-10 10']
    ];

    test_values.forEach(function (pair){
        exchangeIfGreater(pair[0], pair[1], function (results) {
            var test = assert(results, pair[2]);
            console.log(test);
        });
    });
}

function test_multiplicationSign(){
    console.log('Problem 2. Multiplication Sign');

    var test_values = [
    //  [a, b, c, expected]
        [5, 2, 2, '+'],
        [-2, -2, 1, '+'],
        [-2, 4, 3, '-'],
        [0, -2.5, 4, '0'],
        [-1, -0.5, -5.1, '-']
    ];

    test_values.forEach(function (values){
        multiplicationSign(values[0], values[1], values[2], function (results) {
            var test = assert(results, values[3]);
            console.log(test);
        });
    });
}

function test_biggestOfThree(){
    console.log('Problem 3. The biggest of three');

    var test_values = [
        // a, b, c, expected
        [5, 2, 2, 5],
        [-2, -2, 1, 1],
        [-2, 4, 3, 4],
        [0, -2.5, 5, 5],
        [-0.1, -0.5, -1.1, -0.1]
    ];

    test_values.forEach(function (values){
        biggestOfThree(values[0], values[1], values[2], function (results) {
            var test = assert(results, values[3]);
            console.log(test);
        });
    });
}

function test_sortThreeNumbers(){
    console.log('Problem 4. Sort 3 numbers');

    var test_values = [
    //  [a, b, c, expected]
        [5, 1, 2, '5 2 1'],
        [-2, -2, 1, '1 -2 -2'],
        [-2, 4, 3, '4 3 -2'],
        [0, -2.5, 5, '5 0 -2.5'],
        [-1.1, -0.5, -0.1, '-0.1 -0.5 -1.1'],
        [10, 20, 30, '30 20 10'],
        [1, 1, 1, '1 1 1'],
        [-Infinity, Infinity, 0, 'Infinity 0 -Infinity']
    ];

    test_values.forEach(function (values){
        sortThreeNumbers(values[0], values[1], values[2], function (results) {
            var test = assert(results, values[3]);
            console.log(test);
        });
    });
}

function test_digitAsWord(){
    console.log('Problem 5. Digit as word');

    var test_values = [
    //  [digit, word]
        [2, 'two'],
        [1, 'one'],
        [0, 'zero'],
        [5, 'five'],
        [-0.1, 'not a digit'],
        ['hi', 'not a digit'],
        [9, 'nine'],
        [10, 'not a digit']
    ];

    test_values.forEach(function (values){
        digitAsWord(values[0], function (results) {
            var test = assert(results, values[1]);
            console.log(test);
        });
    });
}

function test_quadraticEquation() {
    console.log('Problem 6. Quadratic equation');

    var test_values = [
    //  [a, b, c, expected]
        [2, 5, -3, 'x1=-3; x2=0.5'],
        [-1, 3, 0, 'x1=3; x2=0'],
        [-0.5, 4, -8, 'x1=x2=4'],
        [5, 2, 8, 'no real roots']
    ];

    test_values.forEach(function (values){
        quadraticEquation(values[0], values[1], values[2], function (results) {
            var test = assert(results, values[3]);
            console.log(test);
        });
    });
}

// Well, check the next results by yourself with more data, I have no more time to play :(
// The solutions are simple there, so you won't have any problems to debug them

biggestOfFive(5, 2, 2, 4, 1, function (result) {
    console.log('Problem 7. The biggest of five numbers');
    var test = assert(result, 5);
    console.log(test);
});

numberAsWords(273, function (result) {
    console.log('Problem 8. Number as words');
    var test = assert(result, 'Two hundred and seventy three');
    console.log(test);
});