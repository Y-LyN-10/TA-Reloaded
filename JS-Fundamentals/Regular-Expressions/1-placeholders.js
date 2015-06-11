/**
 * Problem 1. Format with placeholders
 * Write a function that formats a string.
 * The function should have placeholders, as shown in the example
 * Add the function to the String.prototype
 */

(function () {
    'use strict';

    console.log('Problem 1. Format with placeholders');

    String.prototype.format = function(options) {
        var result = this;

        for (var item in options) {
            var placeholderPattern = new RegExp('#{' + item + '}', 'g');
            result = result.replace(placeholderPattern, options[item]);
        }

        return result;
    };

    var options = {
        name: 'John'
    };

    var testData = [
        {
            options: { name: 'John' },
            text: 'Hello, there! Are you #{name}?'
        }, {
            options: { name: 'John', age: 13 },
            text: 'My name is #{name} and I am #{age}-years-old'
        }];


    testData.forEach(function (testCase) {
       console.log(testCase.text.format(testCase.options))
    });
}());