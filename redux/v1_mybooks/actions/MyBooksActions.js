// es6
export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    data: books
  }
});


// es5
export var ADD_BOOK = 'ADD_BOOK';
export var addBook = function(book) {
  return {
    type: ADD_BOOK,
    payload: {
      data: book
    }
  }
};
