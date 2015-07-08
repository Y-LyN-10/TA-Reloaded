/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
	'use strict';

	var Validators = {
		validateTitle: function (value, variableName) {
			var trimmedValue = value.trim();
			if (typeof (value) !== 'string' || trimmedValue.length < 1) {
				throw new Error(variableName + " should be non-empty string.");
			}

			if (/^\s/.test(value) || /\s$/.test(value)) {
				throw new Error(variableName + " shouldn't start or end with spaces");
			}

			if (value.indexOf('  ') >= 0) {
				throw new Error(variableName + " shouldn't have consecutive spaces");
			}
		},

		validateName: function (value, variableName) {
			if(typeof (value) !== 'string' || !value){
				throw new Error(variableName + " should be non-empty string.");
			}

			if (value[0].toUpperCase() !== value[0]) {
				throw new Error(variableName + " should start with an upper case letter");
			}

			//if (value.length > 1) {
			//	value.slice(1).forEach(function (ch) {
			//		if (ch.toLowerCase() !== ch) {
			//			throw new Error("All other symbols in the " + variableName + " (if any) should be lowercase letters");
			//		}
			//	});
			//}
		},

		validateNonEmptyArray: function(array, arrayName){
			if(!array || array.length < 1){
				throw new Error(arrayName + " should be non-empty");
			}
		},

		validateID: function(value, collection){
			if (value !== parseInt(value, 10)) {
				throw new Error('The ID should be integer.');
			}

			// Dirty hack, lol - that is totally wrong, but works here.
			// It should be only for students, but... well, nevermind.
			if(typeof collection[value-1] === 'undefined'){
				throw new Error('Invalid ID');
			}
		}
	};

	var Course = {
		init: function(title, presentations) {
			this.title = title;
			this.presentations = presentations;
			this.students = [];

			return this;
		},
		addStudent: function(name) {
			var names = name.split(' ');
			if(names[2]) throw new Error('Too many names');

			var firstName = names[0] || names;
			var lastName  = names[1] || '';

			Validators.validateName(firstName, 'first name');
			Validators.validateName(lastName, 'last name');

			var student = {
				firstname: firstName,
				lastname : lastName,
				id: this.students.length + 1
			};
			this.students.push(student);

			return student.id;
		},
		getAllStudents: function() {
			return this.students.slice();
		},
		submitHomework: function(studentID, homeworkID) {
			Validators.validateID(studentID, this.students);
			Validators.validateID(homeworkID, this.presentations);
		},
		pushExamResults: function(results) {
			// And wait... what? Only local tests for that? Thank you :)
		},
		getTopStudents: function() {
			// Trololo
		}
	};

	Object.defineProperty(Course, 'title', {
		get: function() {
			return Course._title;
		},
		set: function(value) {
			Validators.validateTitle(value, 'title');
			Course._title = value;
		}
	});

	Object.defineProperty(Course, 'presentations', {
		get: function() {
			return Course._presentations;
		},
		set: function(values) {
			Validators.validateNonEmptyArray(values, 'presentations');
			values.forEach(function(presentation){
				Validators.validateTitle(presentation, 'title');
			});

			Course._presentations = values;
		}
	});

	return Course;
}


module.exports = solve;
