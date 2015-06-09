(function () {
    'use strict';

    function calculateRectangleArea(width, height) {
        return width * height;
    }

    //Array with test examples from the task
    var testNumbers = [[3, 4], [2.5, 3], [5,5]],
        checked, i;

    // test
    for (i = 0; i < testNumbers.length; i += 1) {
        checked = calculateRectangleArea(testNumbers[i][0], testNumbers[i][1]);
        console.log(checked);
    }
}());