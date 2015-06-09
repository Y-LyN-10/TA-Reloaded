(function () {
    'use strict';

    function calcTrapezoidArea(a, b, h){
        return (((a + b) / 2) * h).toFixed(7); //Trapezoid area formula: A = (((a+b)/2)h)
    }

    // [a, b, h]
    var testNumbers = [
        [5, 7, 12],           // area = 72
        [2, 1, 33],           // area = 49.5
        [8.5, 4.3, 2.7],      // area = 17.28
        [100, 200, 300],      // area = 45000
        [0.222, 0.333, 0.555] // area = 0.1540125
    ];

    var area, result, i, a, b, h;

    for(i = 0; i < testNumbers.length; i+=1){
        a = testNumbers[i][0];
        b = testNumbers[i][1];
        h = testNumbers[i][2];

        area = calcTrapezoidArea(a, b, h);
        result = {
            a: a,
            b: b,
            h: h,
            area: Number(area) // to remove zeroes from toFixed() function
        };

        console.log(result);
    }
}());

