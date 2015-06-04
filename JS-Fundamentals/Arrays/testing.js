'use strict';

// Actually, it's not testing, but feeding functions with example data
// and add some more verbosity to the console output

// Just comment out function calls to stop logging some tasks
test_increasingArrayMembers();
test_lexCompareChars();
test_maxEqualSequence();
test_maxIncreasingSequence();
test_selectionSort();
test_mostFrequentNumber();
test_binarySearch();

function test_increasingArrayMembers(){
    console.log('Problem 1. Increase array members');
    console.log(increaseArrayMembers());
}

function test_lexCompareChars(){
    console.log('\nProblem 2. Lexicographically comparison');

    var charArrayGroups = [
        [
            ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
            ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
        ],[
            ['3', '5', 'g', 'd'],
            ['5', '3', 'g', 'd']
        ],[
            ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
            ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']
        ], [
            ['I\'m not a single char, but we\'re equal!'],
            ['I\'m not a single char, but we\'re equal!']
        ]
    ];

    charArrayGroups.forEach(function (arrayGroup) {
        var areEqual, result;

        areEqual = lexCompareChars(arrayGroup[0], arrayGroup[1]);
        result = {
            first_array: arrayGroup[0],
            second_array: arrayGroup[1],
            areEqual: areEqual
        };

        console.log(result);
    });
}

function test_maxEqualSequence(){
    console.log('\nProblem 3. Maximal sequence');

    var numberArrays = [
        [3, 2, 3, 4, 2, 2, 4],
        ['a', 'a', 3, 'b', 0, null, 'a', 'a', 'a'],
        [3, 5, 4, 6, 1, 2, 3, 6, 10, 32],
        [5, 4, 3, 3, '3', 3, 'test', 'test', 'test', 0, '0', '0', 0],
        [3, 2, 1]
    ];

    numberArrays.forEach(function (array) {
        var maxEqualSequence, result; // use functional scope of the .forEach()

        maxEqualSequence = maxSequence(array, 'equal');
        result = {
            elements: array,
            maxSequence: maxEqualSequence.toString()
        };

        console.log(result);
    });
}

function test_maxIncreasingSequence(){
    console.log('\nProblem 4. Maximal increasing sequence');

    var testData = [
        [3, 2, 3, 4, 2, 2, 4],
        [3, 5, 4, 6, 1, 2, 3, 6, 10, 32],
        [3, 2, 1],
        ['a', 'a', 3, 'b', 0, null, 'a', 'a', 'a'],
        [5, 4, 3, 3, '3', 3, 'test', 'test', 'test', 0, '0', '0', 0]
    ];

    testData.forEach(function (array) {
        var maxIncreasingSequence, result;

        maxIncreasingSequence = maxSequence(array, 'increasing');
        result = {
            array: array,
            maxSequence: maxIncreasingSequence.toString()
        };

        console.log(result);
    });
}

function test_selectionSort(){
    console.log('\nProblem 5. Selection sort');

    var exampleArrays = [
        [5, 4, 3, 2, 1],
        [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]
    ];

    exampleArrays.forEach(function (array) {
        var sortedArray = selectionSort(array);

        var result = {
            initial: array.toString(),
            sorted: sortedArray
        };

        console.log(result);
    })
}

function test_mostFrequentNumber(){
    console.log('\nProblem 6. Most frequent number');

    var numberArrays = [                                                    // Output:
        [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],                        // 4 (5 times)
        [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1],     // 1 (4 times)
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]                     // 1 (1 times)
    ];

    numberArrays.forEach(function (array) {
        var number = mostFrequentNumber(array);

        var result = {
            array: array,
            mostFrequentNumber: number
        };

        console.log(result);
    });
}

function test_binarySearch(){
    console.log('\nProblem 7. Binary search');

    var numbersTo100 = Array.apply(0, Array(100)).map((start, n) => (n + 1));

    console.log('Test with numbers from 1 to 100');
    binarySearch(Math.round(Math.random()*100), numbersTo100);
    binarySearch(Math.round(Math.random()*100), numbersTo100);
    binarySearch(Math.round(Math.random()*100), numbersTo100);
    binarySearch(Math.round(Math.random()*100), numbersTo100);
}