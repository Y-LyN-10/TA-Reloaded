function solve(){
	'use strict';

	function isNumber(item) {
		return !(isNaN(item) || Number(item).toString() !== item.toString());
	}

	function byDurationThenById(m1, m2) {
		if (m1.duration === m2.duration) {
			return m1.id - m2.id;
		}

		return m2.duration - m1.duration;
	}

	function byRating(m1, m2){
		return m2.rating - m1.rating;
	}

	var Validators = {
		validateStringLength: function (value, min, max, variableName) {
			var MIN_STRING_LENGTH = min || 1,
				MAX_STRING_LENGTH = max || +Infinity,
				variableName = variableName || 'value ' + value;

			if (typeof (value) !== 'string' || value.length < 1) {
				throw new Error(variableName + " should be non-empty string.");
			}

			if (value.length < MIN_STRING_LENGTH || value.length > MAX_STRING_LENGTH) {
				throw new Error(variableName + ' should be between ' + MIN_STRING_LENGTH + ' and ' + MAX_STRING_LENGTH + 'characters');
			}
		},

		validateISBN: function (value) {
			if (value.length !== 10 && value.length !== 13) {
				throw new Error('Invalid ISBN');
			}

			if (typeof value === 'undefined') {
				throw new Error('ISBN should be defined');
			}

			for (var i = 0; i < value.length; i+=1) {
				if(!isNumber(value[i])){
					throw new Error('invalid isbn');
				}
			}

			//if (!this.every(isNumber)) {
			//	throw new Error('Array contains a non-convertible to Number element');
			//}
		},

		validateDuration: function (value, variableName) {
			if (typeof value === 'undefined') {
				throw new Error(variableName + ' should be defined');
			}

			if (typeof value !== 'number') {
				throw new Error(variableName + ' should be a number');
			}

			if (value < 1) {
				throw new Error(variableName + ' should be positive number');
			}
		},

		validateRating: function (value, variableName) {
			var IMDB_MIN_RATING = 1,
				IMDB_MAX_RATING = 5;

			if (typeof value === 'undefined') {
				throw new Error(variableName + ' should be defined');
			}

			if (typeof value !== 'number') {
				throw new Error(variableName + ' should be a number');
			}

			if (value < IMDB_MIN_RATING || value > IMDB_MAX_RATING) {
				throw new Error(variableName + ' should be between ' + IMDB_MIN_RATING
					+ ' and ' + IMDB_MAX_RATING + 'characters');
			}
		}
	};

	var itemID = 0;
	var catalogID = 0;

	class Item {
		constructor(description, name){
			this.id = ++itemID;
			this.description = description;
			this.name = name;
		}

		get description(){
			return this._description;
		}

		set description(value){
			Validators.validateStringLength(value);
			this._description = value;
		}

		get name(){
			return this._name;
		}

		set name(value){
			Validators.validateStringLength(value, 2, 40, 'Item name');
			this._name = value;
		}
	}

	class Book extends Item {
		constructor(name, isbn, genre, description){
			super(description, name);
			this.isbn = isbn;
			this.genre = genre;
		}

		get isbn(){
			return this._isbn;
		}

		set isbn(value){
			Validators.validateISBN(value);
			this._isbn = value;
		}

		get genre(){
			return this._genre;
		}

		set genre(value){
			Validators.validateStringLength(value, 2, 20, 'Genre');
			this._genre = value;
		}
	}

	class Media extends Item {
		constructor(name, rating, duration, description){
			super(description, name);
			this.duration = duration;
			this.rating = rating;
		}

		get duration(){
			return this._duration;
		}

		set duration(value){
			Validators.validateDuration(value, 'Duration');
			this._duration = value;
		}

		get rating(){
			return this._rating;
		}

		set rating(value){
			Validators.validateRating(value, 'Rating');
			this._rating = value;
		}
	}

	class Catalog {
		constructor(name){
			this.id = ++catalogID;
			this.name = name;
			this.items = [];
		}

		// Ooh, how I want to use es6 destructing here...
		// var-1  => item1, item2, item3 => turn them to [items]
		add(){
			var args = Array.prototype.slice.call(arguments);

			if(args.length < 1 || typeof args[0] === 'undefined'){
				throw new Error('No items are passed!');
			}

			var items = args.length === 1 ? args[0].constructor == Array ? args[0] : args : args;
			/**
			 Any of the items is not an Item instance or not an Item-like object
			 none of the items must be added in case of error
			 **/

			// try another dirty hack
			var constructorName = this.constructor.name;
			var checkInstanceOf = constructorName === 'BookCatalog' ? Book : Media;

			items.forEach(function (item) {
				if(!item instanceof checkInstanceOf){
					throw new Error('not an item instance');
				}

				if(!item.id || !item.description || !item.name){
					throw new Error ('Not an item-like object');
				}

				if(constructorName === 'BookCatalog'){
					if(!item.isbn || !item.genre){
						throw new Error ('Not an book-like object');
					}
				} else if(constructorName === 'MediaCatalog'){
					if(!item.duration || !item.rating){
						throw new Error ('Not an media-like object');
					}
				}
			});

			var self = this;
			items.forEach(function (item) {
				self.items.push(item);
			});

			return this;
		}

		find(options){
			var args = Array.prototype.slice.call(arguments);

			// try another dirty hack
			var constructorName = this.constructor.name;

			if(args.length < 1){
				throw new Error('No Arguments were passed');
			}

			// HORRIBLE CODE!
			if(typeof options.id === 'undefined' && typeof options.name === 'undefined'){
				// it's ID then
				if(options < 1){
					throw new Error('Invalid ID');
				}

				var id = options;
				return this.items[id-1] || null;

			} else {
				// options
				var id = options.id;
				var name = options.name;
				var _items = this.items;

				// TODO

				return _items;
			}
		}

		search(pattern) {
			Validators.validateStringLength(pattern, 'Search pattern');

			return this.items
				.filter(function (item) {
					return item.length !== undefined
						&& item._name
							.toLowerCase()
							.indexOf(pattern.toLowerCase()) >= 0
						|| item._description.indexOf(pattern.toLowerCase()) >= 0;
				})
				.map(function (item) {
					return {
						id: item.id,
						name: item._name,
						description: item._description
					}
				});
		}
	}

	class BookCatalog extends Catalog{
		constructor(name){
			super(name);
			this.books = [];
		}

		getGenres(){
			var genres = new Set();
			this.books.forEach(function (book) {
				genres.add(book.genre.toLowerCase());
			});

			return genres || [];
		}
	}

	class MediaCatalog extends Catalog{
		constructor(name){
			super(name);
		}

		getTop(count){
			var topMedia = this.items
				.sort(byRating)
				.splice(0, count)
				.map(function (item) {
					// shit
					delete item._description;
					delete item._duration;
					delete item._rating;
					return item;
			});

			return topMedia;
		}

		getSortedByDuration(){
			return this.items.sort(byDurationThenById);
		}
	}

	return {
		getBook: function (name, isbn, genre, description) {
			//return a book instance
			return new Book(name, isbn, genre, description);
		},
		getMedia: function (name, rating, duration, description) {
			//return a media instance
			return new Media(name, rating, duration, description)
		},
		getBookCatalog: function (name) {
			//return a book catalog instance
			return new BookCatalog(name);
		},
		getMediaCatalog: function (name) {
			//return a media catalog instance
			return new MediaCatalog(name);
		}
	};
}