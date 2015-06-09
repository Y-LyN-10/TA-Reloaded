// Solution from exam preparation in TA. Uploaded because of used bitwise hacks

function solve(args){
    var rowsCols = args[0].split(' ');
    var bounds = {
        rows: +rowsCols[0],
        cols: +rowsCols[1]
    };
    var matrix = args.slice(1).map(function (line){
        return line.split(' '); //  'dr dl dr ur ul' -> ['dr', 'dl', 'dr', 'ur', 'ul']
    });

    var row = 0, col = 0, sum = 0, dir;
    var deltas = {
        u: -1,
        d: +1,
        l: -1,
        r: +1
    };

    var upDown, leftRight;

    while(1){
        //if(row < 0 || row >= bounds.rows ||
        //   col < 0 || col >= bounds.cols) {
        //    return 'successed with ' + sum;
        //}

        // ^ it's not needed, better write:
        if(!matrix[row] || !matrix[row][col]){
            return 'successed with ' + sum;
        }

        /**
         * !arr[-1] -> true
         * */

        if(matrix[row][col] === 'used'){
            return 'failed at (' + row + ', ' + col + ')';
        }

        // update sum
        // sum += Math.pow(2, row) + col;
        sum += (1 << row) + col;

        // current position
        dir = matrix[row][col];

        // Mark current dir as used
        matrix[row][col] = 'used';

        // need to know directions
        upDown = dir[0];
        leftRight = dir[1];

        // update row & col
        row += deltas[upDown];
        col += deltas[leftRight];
    }

    return matrix;
}

var testData = [
    [
        '3 5',
        'dr dl dr ur ul',
        'dr dr ul ur ur',
        'dl dr ur dl ur'
    ],
    [
        '3 5',
        'dr dl dl ur ul',
        'dr dr ul ul ur',
        'dl dr ur dl ur'
    ]
];

testData.forEach(function (test) {
    console.log(solve(test));
});

/**
 * Bitwise Hacks
 *
 * Math.pow(2, 5) === 2 << 4 === 1 << 5

 * Math.pow(2, 3) ->    2^3.
 *      but 2<<3  -> 2*(2^3)
 * */