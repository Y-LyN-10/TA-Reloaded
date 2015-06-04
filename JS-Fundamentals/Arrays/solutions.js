'use strict';

/**
 * README

   All solutions are at one single file, because I reuse some tasks,
   do abstractions and it's more easy to "follow the flow" when it's in one place.

   And, yeah... sorry if that code is not enough readable for you.
   I love JS and this is my playground to do crazy stuff :)

   I hope you'll learn as much as me from that homework.
   Although, your feedback is welcome :)

 **/

function increaseArrayMembers(){
    return Array
        .apply(0, Array(20))
        .map((start, n) => (n + 1) * 5);
}

/* Well, char arrays are strings actually
 If not, we can 'join' them to create a single string and simply compare them.*/
function lexCompareChars(a, b){
    return a.length === b.length ? a.join('') === b.join('') : false;
}

// Combine maxEqualSequence and maxIncreasingSequence tasks
// Now we can just call maxSequence(elements, type) where type is 'increasing' or 'equal'

function maxSequence(elements, type){
    var groups = group(elements, type);
    if(type === 'increasing'){
        groups = groups.filter(group => group.every(isNumber));
    }

    // Return only the first group with max length
    return groups.filter(g => g.length === Math.max
        .apply(Math, [for (g of groups) g.length]))[0]; // || elements[0]
}

function group(elements, by){
    var result = [];
    var sequence = [elements[0]];

    for(var i = 1; i <= elements.length; i+=1){
        if(by === 'increasing'){
            // group only numbers
            if((!isNumber(elements[i-1]) || !isNumber(elements[i])) || (elements[i] <= elements[i-1])) {
                result.push(sequence);
                sequence = [];
            }
        } else { // group equal elements by default
            if(elements[i] !== elements[i-1]){
                result.push(sequence);
                sequence = [];
            }
        }

        sequence.push(elements[i]);
    }

    return result;
}

// isNaN compares by ==, not ===. That leads to ('0' == 0 ? // true) and I don't want that
function isNumber(char){
    return typeof char === 'number' && !isNaN(char);
}

function selectionSort(items){
    var length = items.length, i, j;

    for (i = 0; i < length - 1; i += 1) {
        var min = i;

        // loop through unsorted part of the array
        for (j = i + 1; j < length; j += 1) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        // swap the numbers
        if (min !== i) {
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }

    return items;
}

function mostFrequentNumber(numbers){
    // Awesome, we can reuse selection sort function and maxEqualSequence! That's all :)
    var maxEqual = maxSequence(selectionSort(numbers, 'equal'));
    return `${maxEqual[0]} (${maxEqual.length} times)`;
}

// Assume that our array is already sorted.
function binarySearch(key, array, min = 0, max = array.length){
    if(max < min){ return -1; } // not found

    var midIndex = Math.round((max + min ) / 2);

    if(array[midIndex] < key){
        binarySearch(key, array, midIndex + 1, max);
    } else if (array[midIndex] > key){
        binarySearch(key, array, min, midIndex - 1);
    } else {
        console.log({key: key, index: midIndex});
        return midIndex;
    }
}