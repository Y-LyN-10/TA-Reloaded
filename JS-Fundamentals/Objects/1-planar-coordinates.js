(function(){
    'use strict';

    console.log('Problem 1. Planar coordinates');

    var firstPoint = createPoint(6, "4.5"),
        secondPoint = createPoint("-3.1", "-1"),
        thirdPoint = createPoint(4, 6),
        fourthPoint = createPoint(24, 2),
        fifthPoint = createPoint(-4.2, 6.1),
        sixthPoint = createPoint(18.3, 0),
        firstLine = createLine(firstPoint, secondPoint),
        secondLine = createLine(thirdPoint, fourthPoint),
        thirdLine = createLine(fifthPoint, sixthPoint),
        lengthA = calculateDistance(firstLine.p1, firstLine.p2),
        lengthB = calculateDistance(secondLine.p1, secondLine.p2),
        lengthC = calculateDistance(thirdLine.p1, thirdLine.p2);

    console.log("first point: " + firstPoint.toString());
    console.log("second point: " + secondPoint.toString());
    console.log("distance between them: " + calculateDistance(firstPoint, secondPoint));
    console.log("first line: " + firstLine.toString());
    console.log("side A: " + lengthA + " side B: " + lengthB + " side C: " + lengthC);
    console.log("They can form a triangle: ", isValidTriangle(lengthA, lengthB, lengthC));

    function createPoint(x, y){
        if (isNaN(x) || isNaN(y)) {
            return null;
        }
        return {
            x: parseFloat(x),
            y: parseFloat(y),
            toString: function(){return "[" + this.x + ", " + this.y + "]";}
        }
    }

    function createLine(pointOne, pointTwo){
        return {
            p1: pointOne,
            p2: pointTwo,
            toString: function(){return "p1" + pointOne.toString() + ", p2" + pointTwo.toString();}
        }
    }

    function calculateDistance(pointOne, pointTwo){
        var dx = pointTwo.x - pointOne.x,
            dy = pointTwo.y - pointOne.y;

        return Math.sqrt((dx * dx) + (dy * dy));
    }

    function isValidTriangle(a, b, c){
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return false;
        }

        return ((a + b > c) && (b + c > a) && (a + c > b));
    }
}());