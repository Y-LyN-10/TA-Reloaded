(function () {
    'use strict';

    var isLarger, firstLarger, i, j, index, result;

    function isLargerThanNeighbors(index, numbers) {
        if (index === 0 || index === numbers.length - 1) {
            return 'only one neighbor';
        } else if (index > numbers.length - 1) {
            return 'invalid index';
        } else if (numbers[index - 1] < numbers[index]
            && numbers[index] > numbers[index + 1]) {
            return 'bigger'
        } else {
            return 'not bigger';
        }
    }

    function firstLargerThanNeighbors(numbers) {
        for(index = 0; index <= numbers.length; index += 1){
            var indexResult = isLargerThanNeighbors(index, numbers);
            if(indexResult === 'bigger'){
                return index;
            }
        }

        return -1;
    }

    //Test with the examples from the task
    var testNumbers = [
            [2, [1, 2, 3, 3, 5]], // not bigger
            [2, [1, 2, 5, 3, 4]], // bigger
            [5, [1, 2, 5, 3, 4]], // invalid index
            [0, [1, 2, 5, 3, 4]]  // only one neighbor
        ];

    console.log('Problem 6. Larger than neighbours');

    for (i = 0; i < testNumbers.length; i += 1) {
        isLarger = isLargerThanNeighbors(testNumbers[i][0], testNumbers[i][1]);
        result = {
            index: testNumbers[i][0],
            numbers: testNumbers[i][1].toString(),
            isBigger: isLarger
        };
        console.log(result);
    }

    console.log('Problem 7. First larger than neighbours');
    testNumbers = [
        [1, 2, 3, 3, 5],
        [1, 2, 5, 3, 4],
        [5, 2, 1, 7, 3]
    ];

    for (j = 0; j < testNumbers.length; j += 1) {
        firstLarger = firstLargerThanNeighbors(testNumbers[j]);
        result = {
            numbers: testNumbers[j].toString(),
            firstLarger: firstLarger
        };
        console.log(result);
    }


}());