(function () {
    'use strict';

    function checkPointInCircle(x, y, radius){
        radius = radius || 5; // by default

        //Pythagorean theorem (a^2 + b^2 = c^2) checks if the point is within the circle.
        return ((x * x) + (y * y) <= (radius * radius))
    }

    var testNumbers = [
        [0, 1],
        [-5, 0],
        [-4, 5],
        [1,.5, -3],
        [-4, -3.5],
        [100, -30],
        [0, 0],
        [0.2, -0.8],
        [0.9, -4.93],
        [2, 2.655]
    ];

    var inCircle, result, i;

    for(i = 0; i < testNumbers.length; i+=1){
        inCircle = checkPointInCircle(testNumbers[i][0], testNumbers[i][1]);
        result = {
            x: testNumbers[i][0],
            y: testNumbers[i][1],
            inCircle: inCircle
        };

        console.log(result);
    }
}());

//(((a + b) / 2) * h); //Trapezoid area formula: A = (((a+b)/2)h)