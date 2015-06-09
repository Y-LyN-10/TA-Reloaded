(function () {
    'use strict';

    var numberArrays, number, result;

    console.log('Problem 5. Appearance count');

    function appearanceCount(numbers) {
        // We can just sort the array and get the longest sequence of equal elements
        numbers.sort();

        var equalNumbers = findMaxSequence(numbers, 'equal');
        return equalNumbers[0] + ' (' + equalNumbers.length + ' times)';
    }

    // In that task I reuse the function findMaxSequence from the previous homework :}
    function findMaxSequence(numbers) {
        var currentSequence = 1,
            longestSequence = 1,
            sequenceItem = numbers[0],
            result = [];

        numbers.forEach(function (n, i, numbers) {
            if (numbers[i - 1] === numbers[i]) {
                currentSequence++;
                if (currentSequence >= longestSequence) {
                    longestSequence = currentSequence;
                    sequenceItem = numbers[i];
                }
            } else {
                currentSequence = 1;
            }
        });

        while (longestSequence--) {
            result.push(sequenceItem);
        }

        return result;
    }

    numberArrays = [                                 // Output:
        [[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3], '4 (5 times)'],
        [[2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1], '1 (4 times)'],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], '1 (1 times)']
    ];

    numberArrays.forEach(function (array) {
        number = appearanceCount(array[0]);

        result = {
            numbers: array[0].toString(),
            mostFrequentNumber: number,
            testPassed: assert(array[1], number)
        };

        console.log(result);
    });

    function assert (result, expected) {
        return result === expected ? 'OK' : 'Expected: ' + expected + ' your result: ' + result;
    }

}());