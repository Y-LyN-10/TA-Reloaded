function solve(args){
    'use strict';

    var points = args[0].split(' ').map(Number);
    var pointsLength = points.length;
    var hills = {};

    // First and last point are peaks
    hills[0] = {
        line: points[0],
        type: 'peak'
    };

    function isPeak(index, numbers) {
        if (numbers[index - 1] < numbers[index]
            && numbers[index] > numbers[index + 1]) {
            return true;
        }

        return false;
    }

    function isValley(index, numbers) {
        if (numbers[index - 1] > numbers[index]
            && numbers[index] < numbers[index + 1]) {
            return true;
        }

        return false;
    }

    for(var i = 1; i < pointsLength -1; i+=1){
        hills[i] = {
            line: points[i]
        };

        if(isPeak(i, points)){
            hills[i]['type'] = 'peak';
        } else if(isValley(i, points)){
            hills[i]['type'] = 'valley';
        } else {
            hills[i]['type'] = 'middle';
        }
    }

    hills[pointsLength] = {
        line: points[pointsLength-1],
        type: 'peak'
    };

    var rockCounter = 0;
    var rockCounts = [];

    // find distance between peaks or peak and a valley

    for (var hillNumber in hills) {
        var hill = hills[hillNumber];

        if (hill.type !== 'peak') {
            rockCounter +=1;
        }else {
            rockCounter += 1;
            rockCounts.push(rockCounter);
            rockCounter = 0;
        }
    }

    return Math.max.apply(Math, rockCounts);
}

var testData = [
    ['5 1 7 4 8'],
    ['5 1 7 6 3 6 4 2 3 8'],
    ['10 1 2 3 4 5 4 3 2 1 10']
];

testData.forEach(function (testCase) {
    console.log(solve(testCase));
});