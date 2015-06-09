(function () {
    'use strict';

    var exampleStrings, mostFrequentWord;

    console.log('Problem 3. Occurrences of word');

    function findMostFrequentWord(string) {
        var words = [], word,
            maxCounter = 1,
            frequencies = {},
            stringResult = [];

        words = string
            .toLowerCase()
            .match(/\b\w+\b/g)
            .sort();

        words.forEach(function (word) {
            if (frequencies[word] === undefined) {
                frequencies[word] = { word: word, times: 1 };
            } else {
                frequencies[word].times += 1;
            }

            if (frequencies[word].times > maxCounter) {
                maxCounter = frequencies[word].times;
            }
        });

        for (var i in frequencies) {
            word = frequencies[i];
            if (word.times === maxCounter) {
                stringResult.push(word.word + ' -> ' + word.times + ' times');
            }
        }

        return stringResult;
    }

    exampleStrings = [
        'The night is dark and full of terrors',
        'You know nothing, Jon Snow. You know nothing',
        'Write in C, write in C, write in C, whisper words of wisdom, write in C'
    ];

    exampleStrings.forEach(function (string) {
        mostFrequentWord = findMostFrequentWord(string);
        console.log('Text: ' + string);
        console.log('Word occurrences:\n' + mostFrequentWord.join('\n'));
        console.log();
    });
}());