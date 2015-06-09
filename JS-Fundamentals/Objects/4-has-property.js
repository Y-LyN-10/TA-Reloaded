(function () {
    'use strict';

    console.log('\n\nProblem 4. Has property');

    function hasProperty(obj, property){
        for (var prop in obj) {
            if (prop === property) {
                return true;
            }
        }

        return false;
    }

    var student = {firstName: "Jane", lastName: "Doe", age: "unknown"},
        wantedProperty = "age",
        hasProp = hasProperty(student, wantedProperty);

    console.log(student);
    console.log("it has property " + wantedProperty + ": " + hasProp);
}());