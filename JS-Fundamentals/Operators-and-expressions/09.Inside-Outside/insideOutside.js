(function () {
    'use strict';

    function insideCircle(x, y){
        //circle K({1, 1}, 3)
        var radius = 3;
        x = x - 1;
        y = y - 1;

        return ((x * x) + (y * y) <= (radius * radius))
    }

    function outsideRectangle(x, y){
        //Rectangle R
        var top = 1;
        var bottom = -1;
        var left = -1;
        var right = 2;

        return !(x >= left && x <= right && y <= top && y >= bottom);
    }

    // [x, y]
    var testNumbers = [
        [1, 4], [3, 2], [0, 1], [4, 1], [2, 0],
        [4, 0], [2.5, 1.5], [3.5, 1.5], [-100, -100]
    ];

    var inCircle, outRectangle, result, i, x, y;

    for(i = 0; i < testNumbers.length; i+=1){
        x = testNumbers[i][0];
        y = testNumbers[i][1];

        inCircle = insideCircle(x, y);
        outRectangle = outsideRectangle(x, y);

        result = {
            x: x,
            y: y,
            insideKandOutsideR: inCircle && outRectangle ? 'yes' : 'no'
        };

        console.log(result);
    }
}());

