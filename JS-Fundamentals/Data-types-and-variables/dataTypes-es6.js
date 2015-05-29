/***
 * Problem 1. JavaScript literals
 * Assign all the possible JavaScript literals to different variables. ***/
'use strict';

// Let is the same as 'var', but with block-scoping.
// No needed really for this task, but let's convoke

/**
 * The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, and Object.
 * An ECMAScript language value is a value that is characterized by an ECMAScript language type. */

let variable;
let notDefined = undefined;
let justNull = null;
let arr = [];
let object = {};
let bool = true;
let emptyString = '';
let utfString = '\u{1f638}';
let symbol = Symbol.iterator;
let number = +Infinity;
let hexNumber = 0x110BA5;
let func = function(){};

/**
 * Problem 2. Create a string variable with quoted text in it.
 * */

let quotedText = '"Then you know nothing, Jon Snow" - she whispered.';
console.log(quotedText);

// Bonus
let ticks = `I'm a special ES6 string literal with back ticks. See that: ${quotedText}`;
console.log(ticks);

/**
 * Problem 3. Try typeof on all variables you created.
 * */
/**
 * Problem 4. Create null, undefined variables and try typeof on them.
 * */

console.log(typeof variable);    // undefined
console.log(typeof notDefined);  // undefined
console.log(typeof justNull);    // object
console.log(typeof arr);         // object
console.log(typeof object);      // object
console.log(typeof bool);        // boolean
console.log(typeof emptyString); // string
console.log(typeof utfString);   // string
console.log(typeof symbol);      // symbol
console.log(typeof number);      // number
console.log(typeof hexNumber);   // number
console.log(typeof func);        // function
console.log(typeof ticks);       // string