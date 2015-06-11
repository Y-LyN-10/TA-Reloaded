function solve(params) {
    var rows = parseInt(params[0]), // between 1 and 9 inclusive
        cols = parseInt(params[1]), // between 5 and 12 inclusive
        tests = parseInt(params[rows + 2]),
        knightMoves = [
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1]
        ], move;

    var playersMatrix = [];
    // read game matrix from input
    for(var k = 0; k < rows; k+=1){
        playersMatrix.push(params[k + 2].split(''));
    }

    // generate chess board matrix
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var chessBoard = [];
    var mR = rows; // matrix rows

    for(var i = 0; i < rows; i+=1){
        chessBoard.push([]);

        for(var j = 0; j < cols; j += 1){
            var cell = alphabet[j] + mR;
            var value = playersMatrix[i][j];
            chessBoard[i][j] = {};
            chessBoard[i][j][cell] = value;
        }

        mR--;
    }

    // fuck, generate simple chess board!!!
    var simpleChessBoard = [];
    mR = rows;
    for(var i = 0; i < rows; i+=1){
        simpleChessBoard.push([]);

        for(var j = 0; j < cols; j += 1){
            simpleChessBoard[i][j] = alphabet[j] + mR;
        }

        mR--;
    }

    var from, to, m;

    for (m = 0; m < tests; m++) {
        move = params[rows + 3 + m].split(' ');
        from = getCell(move[0]);
        to =  getCell(move[1]);

        // 1. Check if no piece there
        if(from.cell === '-'){
            console.log('no');
        }
        // 2. Check if not a vacant square
        else if(to.cell !== '-'){
            console.log('no');
        } else if(!validMove(from, to)){
            console.log('no');
        } else {
            console.log('yes');
        }

        // actually make a move
        playersMatrix[from.index.row][from.index.col] = '-';
        playersMatrix[to.index.row][to.index.col] = from.cell;
    }


    // check if no piece there o
    function getCell(cell){
        for(var line in chessBoard){
            for(var obj in chessBoard[line]){
                var currentCell = chessBoard[line][obj];
                if(currentCell[cell]){
                    return {
                        cell: currentCell[cell],
                        index: {
                            row: line, col: obj
                        }
                    };
                }
            }
        }
    }

    function validMove(from, to){
        var figure = from.cell;

        if(figure === 'K'){
            var foundValid = false;
            knightMoves.forEach(function (pair) {
                if(parseInt(from.index.row) - parseInt(pair[0]) === parseInt(to.index.row) &&
                    parseInt(from.index.col) - parseInt(pair[1]) === parseInt(to.index.col)){
                    foundValid = true;
                }

            });

            return foundValid;

        } else if(figure === 'Q'){
            // on the same line
            if(from.index.row === to.index.row){
                // check cols
                var rowToLoopOver = from.index.row;
                var letterCellTo = simpleChessBoard[to.index.row][to.index.col];

                for(var colInMatrix in playersMatrix[rowToLoopOver]){
                    var currentLetterSquare = simpleChessBoard[rowToLoopOver][colInMatrix];
                    if(currentLetterSquare === letterCellTo){
                        return true;
                    }

                    if(colInMatrix !== from.index.col && playersMatrix[rowToLoopOver][colInMatrix] !== '-'){
                        return false;
                    }
                }
            } else if(from.index.col === to.index.col) {
                // check rows on that col
                for(var chessRow in playersMatrix){
                    if(playersMatrix[chessRow][from.index.col] !== '-'){
                        return false;
                    }
                }
            }


            return true;

            // TODO: Check diagonals

            // diagonals
            //else {
            //    var r = from.index.row;
            //    var c = from.index.col;
            //
            //    //(playersMatrix[r][c]=== '-' && r === c) ? r++ : 0;
            //    //(playersMatrix[r][c]=== '-' && (r+c)===(playersMatrix.length-1)) ? c++ : 0;
            //}
        }
    }
}


var zeroTest = [
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'
];

console.log(solve(zeroTest));