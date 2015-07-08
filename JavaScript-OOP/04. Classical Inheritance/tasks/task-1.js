/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	// Some sugar functions from Douglas Crockford for 'classical inheritance'
	// www.crockford.com/javascript/inheritance.html#sugar
	Function.prototype.method = function (name, func) {
		this.prototype[name] = func;
		return this;
	};

	// And yeah, really shitty solution

	var Person = (function () {
		function Person(firstName, lastName, age) {
			this.setFirstName(firstName);
			this.setLastName(lastName);
			this.setAge(age);
		}

		Person.method('setFirstName', function (value) {
			if(value.length < 3 || value.length > 20){
				throw new Error ('Invalid name length');
			}

			if(value.search(/[^a-zA-Z]+/) > -1){
				throw new Error ('Invalid characters');
			}

			this.firstname = value;
			return this;
		});

		Person.method('setLastName', function (value) {
			if(value.length < 3 || value.length > 20){
				throw new Error ('Invalid name length');
			}

			if(value.search(/[^a-zA-Z]+/) > -1){
				throw new Error ('Invalid characters');
			}

			this.lastname = value;
			return this;
		});

		Person.method('setAge', function (value) {
			if(isNaN(value)){
				throw new Error ('Age should be a number');
			}

			if(Number(value) < 0 || Number(value) > 150){
				throw new Error ('Invalid age');
			}

			this.age = Number(value);
			return this;
		});

		// this one is special xD
		Object.defineProperty(Person.prototype, 'fullname', {
			get: function(){
				return this.firstname + ' ' + this.lastname;
			},

			set: function(value){
				var names = value.split(' ');
				this.firstname = names[0];
				this.lastname = names[1];
			}
		});

		Person.method('introduce', function () {
			return 'Hello! My name is ' + this.fullname + ' and I am '+ this.age +'-years-old';
		});

		return Person;
	} ());

	return Person;
}

module.exports = solve;