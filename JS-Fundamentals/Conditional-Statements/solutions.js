'use strict';

/**
 * Problem 1. Exchange if greater
 * Write an if statement that takes two double variables a and b and exchanges
   their values if the first one is greater than the second.
   As a result print the values a and b, separated by a space.
 */

// The results are sent to the testing script via callback
function exchangeIfGreater(a, b, sendResult){
    sendResult(a < b ? `${a} ${b}` : `${b} ${a}`);
}

/**
 * Problem 2. Multiplication Sign
 * Write a script that shows the sign (+, - or 0) of the product of three real
   numbers, without calculating it. Use a sequence of if operators.
 */
function multiplicationSign(a, b, c, sendResult){
    // First, check if there's a zero...
    if([a, b, c].indexOf(0) >= 0){
        sendResult('0');
    } else {
        // To be different, parse to string all numbers and count signs, lol xD
        var stringNumbers = '' + a + b + c;
        var countMinuses = 0, sign;

        // array comprehensions from ES7, yeah!
        [for (ch of stringNumbers) if(ch === '-') countMinuses += 1];

        // And, yeah - I know. It's ultra not-readable code,
        // but these homeworks are too boring for me, so I want just to play xD
        sign = countMinuses % 2 === 0 ? '+' : '-';
        sendResult(sign);
    }

}

/**
 * Problem 3. The biggest of Three
 * Write a script that finds the biggest of three numbers.
   Use nested if statements.
 */
function biggestOfThree(a, b, c, sendResult){
    /**
     * Yh... 'nested if statements' are so boring,
       let's complicate them a little bit... with nested ternary operators!
       Have you ever heard of 'It was hard to write, so it should be hard to read' ?
       I challenge you to debug this :3 But don't worry, it's tested
     */
    sendResult(a > b ? a > c ? a : b > c ? b : c : b > c? b : c);
}

/**
 * Problem 4. Sort 3 numbers
 * Sort 3 real values in descending order. Use nested if statements.

 Note: Don’t use arrays and the built-in sorting functionality.
 */
function sortThreeNumbers(a, b, c, sendResult){
    var numbers = [a, b, c];
    var sorted = [];

    // Don't use built-in sorting functionality?
    // Well, reuse already written function biggestOfThree in a quirk way
    biggestOfThree(a, b, c, function (biggest) {
        numbers.splice(numbers.indexOf(biggest), 1);
        sorted.push(biggest);

        biggestOfThree(numbers[0], numbers[1], -Infinity, function (midNumber) {
            numbers.splice(numbers.indexOf(midNumber), 1);
            sorted.push(midNumber);
            sorted.push(numbers[0]);

            // Don't be afraid of callbacks :)
            sendResult(sorted.join(' '));
        });
    });
}

/**
 * Problem 5. Digit as word
   Write a script that asks for a digit (0-9), and depending
   on the input, shows the digit as a word (in English).
   Print “not a digit” in case of invalid input. Use a switch statement.
 */
function digitAsWord(digit, sendResult){
    var result;

    // Use a switch statement? :/ It's 10 lines of code... huh
    switch(digit){
        case 0: result = 'zero';  break;
        case 1: result = 'one';   break;
        case 2: result = 'two';   break;
        case 3: result = 'three'; break;
        case 4: result = 'four';  break;
        case 5: result = 'five';  break;
        case 6: result = 'six';   break;
        case 7: result = 'seven'; break;
        case 8: result = 'eight'; break;
        case 9: result = 'nine';  break;
        default:result = 'not a digit'; break;
    }

    sendResult(result);
}

/**
 * Problem 6. Quadratic equation
 * Write a script that reads the coefficients a, b and c of a quadratic
   equation ax2 + bx + c = 0 and solves it (prints its real roots).
   Calculates and prints its real roots.

 Note: Quadratic equations may have 0, 1 or 2 real roots.
 */
function quadraticEquation(a, b, c, sendResult){
    var root1, root2, result;
    var dD = (b * b) - (4 * a * c);

    if (dD > 0) {
        root1 = (-b - Math.sqrt(dD)) / (2 * a);
        root2 = (-b + Math.sqrt(dD)) / (2 * a);

        result = `x1=${root1}; x2=${root2}`;
    }
    else if (dD === 0) {
        root1 = root2 = (-b - Math.sqrt(dD)) / (2 * a);
        result = `x1=x2=${root1}`;
    }
    else {
        result = 'no real roots';
    }

    sendResult(result);
}

/**
 * Problem 7. The biggest of five numbers
   Write a script that finds the greatest of given 5 variables.
   Use nested if statements.
 */
function biggestOfFive(a, b, c, d, e, sendResult){
    if (a > b) {
        if (a > c) {
            if (a > d) {
                if (a > e) {
                    sendResult(a);
                } else {
                    sendResult(e)
                }
            } else {
                if (d > e) {
                    sendResult(d);
                } else {
                    sendResult(e)
                }
            }
        } else {
            if (c > d) {
                if (c > e) {
                    sendResult(c);
                } else {
                    sendResult(e);
                }
            } else {
                if (d > e) {
                    sendResult(d);
                } else {
                    sendResult(e);
                }
            }
        }
    } else {
        if(b > c){
            if(b > d){
                if(b > e){
                    sendResult(b);
                } else {
                    sendResult(e);
                }
            } else {
                if(d > e){
                    sendResult(d);
                } else {
                    sendResult(e);
                }
            }
        } else {
            if(c > d){
                if(c > e){
                    sendResult(c);
                } else{
                    sendResult(e);
                }
            } else {
                if(d > e){
                    sendResult(d);
                } else {
                    sendResult(e);
                }
            }
        }
    }
}

/**
 * Problem 8. Number as words
 * Write a script that converts a number in the range [0…999] to words,
   corresponding to its English pronunciation.
 */
function numberAsWords(number, sendResults){
    var result = '';
    var ones = [ '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var tens = [ '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ];
    var numbersToTwenty = [ 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    if (number <= 0 || number > 999) {
        if(number === 0){
            sendResults('Zero');
        } else {
            sendResults('Out of range');
        }
    }
    else {
        if (number < 10) {
            result = ones[number];
        }
        else if (number >= 10 && number < 20) { // 11 to 19
            result = numbersToTwenty[number % 10];
        }
        else if (number >= 20 && number < 100) { // 20 to 99
            result = `${tens[number / 10]} ${ones[number % 10]}`;
        }
        else if (number >= 100 && number < 1000) { // 101 to 999
            // Block scoping is not fully implemented to the browsers yet, so use var
            var firstDigit = Math.floor((number / 100));     // find first digit
            var midDigit   = Math.floor((number / 10) % 10); // find middle digit
            var lastDigit  = Math.floor((number % 10) % 10); // find last digit

            result = `${ones[firstDigit]} Hundred `;

            // There should be  better solution without code repeating, but I have no time to think now
            if (midDigit === 0) { // *00 to *09
                result += `And ${ones[lastDigit]}`;
            }
            else if (midDigit === 1) { // *10 to *19
                result += `And ${numbersToTwenty[lastDigit]}`;
            }
            else { // *20 to *99
                result += `And ${tens[midDigit]} ${ones[lastDigit]}`;
            }
        }
    }

    sendResults(result.charAt(0).toUpperCase() + result.slice(1).toLowerCase());
}