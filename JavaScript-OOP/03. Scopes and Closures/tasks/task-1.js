/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/category has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
 */
function solve() {
	'use strict';

	return (function () {
		var books = [];
		var categories = [];

		// TODO: Validation function to check ID (>=1)

		function listBooks(criteria) {
			// TODO: Sort books by ID, author or category
			if(criteria){
				if(criteria.category){
					return books.filter(function (book) {
							return book.category === criteria.category
						}) || [];
				}

				if(criteria.author){
					return books.filter(function (book) {
							return book.author === criteria.author
						}) || [];
				}

			} else {
				return books;
			}
		}

		function addBook(book) {
			if(!isUnique(books, 'title', book.title) ||
				!isUnique(books, 'isbn', book.isbn)){
				throw new Error ('This book is already added');
			}

			// TODO: Refactoring
			if (book.title.length < 2 || book.title.length > 100) {
				throw new Error('The book title cannot be less than 2 characters or more than 100');
			}
			if (book.isbn.length !== 10 && book.isbn.length !== 13) {
				throw new Error('Invalid ISBN');
			}
			if (!book.author) {
				throw new Error('Missing author name');
			}

			if(categories.indexOf(book.category) < 0){
				categories.push(book.category);
			}

			book.ID = books.length + 1;
			books.push(book);

			return book;
		}

		function listCategories() {
			// TODO: Sort by ID
			return categories;
		}

		// TODO: If something is not valid => throw error

		function isUnique(arr, prop, value){
			for(var i in arr){
				var obj = arr[i];
				if(obj[prop] === value){
					return false;
				}
			}

			return true;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	}());
}

module.exports = solve;
